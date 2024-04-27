import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./config";
// import Commonsvg from "../assets/commonsvg";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { MuiTelInput } from "mui-tel-input";
import GoogleSignIn from "./googleSignin";

// function getUserDetails() {
//   let userDetails = localStorage.getItem("userDetails");

//   if (userDetails) {
//     userDetails = JSON.parse(userDetails);
//   } else {
//     userDetails = null;
//   }
//   return userDetails;
// }
interface UserDetails {
  uid: string;
  username: string;
  phoneNumber: string;
}

function getUserDetails(): UserDetails[] {
  let userDetails = localStorage.getItem("userDetails");

  if (userDetails) {
    return JSON.parse(userDetails);
  } else {
    return [];
  }
}

export const StyledLogin = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  marginTop: 30,
  padding: theme.spacing(1, 4, 2, 4),
}));

const StyledInputForm = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 20,
  width: 440,
  padding: theme.spacing(1, 4, 2, 4),
}));

const StyledSignupOptions = styled("div")(() => ({}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: 200,
  margin: theme.spacing(0, 1),
  fontSize: 10,
  backgroundColor: "#000",
  color: "#FFF",
  "&:hover": {
    backgroundColor: "#57A845",
  },
}));

const StyledHeader = styled("div")(() => ({
  width: "100%",
  height: 60,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledFooter = styled("div")(() => ({
  width: "100%",
  gap: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const PhoneInput = styled(MuiTelInput)(() => ({
  display: "flex",
  width: "100%",
  height: 60,
  gap: 10,
}));

export const StyledSignupFields = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 10,
}));

export const StyledVerifyAndLogin = styled("div")(() => ({
  width: "100%",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  gap: 10,
}));

const Login = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState<any>(null);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(""); // Add state for error

  // const dispatch = useDispatch();

  const signupOptions = [
    {
      name: "Don't have an account? Sign Up",
      path: "/marketplace/signup",
    },
  ];



  const handleFormSubmit = async () => {
    try {
      const userDetails = getUserDetails();
      console.log("User Details:", userDetails);

      // Check if userDetails is not empty and has phone numbers
      if (userDetails && userDetails.length > 0) {
        for (const user of userDetails) {
          const phoneFromLocalStorage = user.phoneNumber;
          console.log("Phone from Local Storage:", phoneFromLocalStorage);

          // Check if the entered phone matches the phone number in array
          if (phone === phoneFromLocalStorage) {
            const recaptchaContainer = document.getElementById("recaptcha");

            if (!recaptchaContainer) {
              console.error("Recaptcha container not found");
              return;
            }

            try {
              const recaptcha = new RecaptchaVerifier(
                auth,
                recaptchaContainer,
                {}
              );

              // Check if the phone number is long enough (adjust the minimum length as needed)
              const phoneNumber = `+${phoneFromLocalStorage}`;
              if (phoneNumber.length < 10) {
                setError("Invalid phone number");
                return;
              }
              console.log("Phone :", phone);

              const confirmation = await signInWithPhoneNumber(
                auth,
                phoneNumber,
                recaptcha
              );
              setConfirmationResult(confirmation);

              // After OTP sending, show the OTP input field
              setShowOtpInput(true);
            } catch (error) {
              console.error("Error during reCAPTCHA verification:", error);
              // Handle reCAPTCHA verification error
            }
          } else {
            // Phone number does not match, show an error message
            setError("Entered phone number is not registered");
          }
        }
      } else {
        console.error("No user details found");
      }
    } catch (error: any) {
      console.error(error);

      if (error.code === "auth/too-many-requests") {
        // Implement a backoff strategy, for example, wait for 5 seconds and then retry
        setTimeout(() => {
          handleFormSubmit();
        }, 1000);
      }
    }
  };
  // const dispatch = useDispatch();

  const verifyOtp = async () => {
    try {
      if (!confirmationResult) {
        console.error("Confirmation result not found");
        return;
      }

      await confirmationResult.confirm(otp);

      const user = await auth.currentUser;

      if (user) {
        const userUID = user.uid;
        const userName = user.displayName;
        navigate("/marketplace/landing");
        setIsVerified(true);
        alert(`Welcome, User UID: ${userUID}`);
        console.log(`Welcome, userName: ${userName}`)
        if (isVerified) {
          console.log(`User verified! UID: ${userUID}, Name: ${userName}`);
        }
        navigate(location.pathname, {
          state: {
            loginSuccessMessage: "Login successful! Welcome back ${userName}!",
          },
        });
        console.error("User not found after OTP confirmation");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledLogin>
      <StyledInputForm>
        <StyledHeader>
          <Typography variant="h5" fontWeight="600">
            Login
          </Typography>
        </StyledHeader>

        <StyledSignupFields>
          <Stack direction={"column"} spacing={10}>
            <PhoneInput
              defaultCountry={"IN"}
              value={phone}
              onChange={(value) => {
                // Remove spaces from the entered phone number
                const cleanedPhone = value.replace(/\s/g, "");
                setPhone(cleanedPhone);
                console.log("Entered Phone Number:", cleanedPhone);
              }}
              name="Phone No"
              label="Phone No"
            />
          </Stack>
          <StyledVerifyAndLogin>
            <Box p={1}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            </Box>
            <Stack direction={"column"} spacing={10}>
              <div id="recaptcha"></div>
            </Stack>
            {showOtpInput && (
              <Stack mt={"4.17vh"}>
                <TextField
                  name="otp"
                  label="OTP"
                  fullWidth
                  onChange={(e) => setOtp(e.target.value)}
                  value={otp}
                />
              </Stack>
            )}
            {/* Display error message */}
            {error && (
              <Typography color="error" variant="caption" mt={1}>
                {error}
              </Typography>
            )}
            <Stack>
              {!showOtpInput ? (
                <StyledButton type="button" onClick={handleFormSubmit}>
                  Login
                </StyledButton>
              ) : (
                <StyledButton type="button" onClick={verifyOtp}>
                  Verify OTP and Login
                </StyledButton>
              )}
            </Stack>
          </StyledVerifyAndLogin>
        </StyledSignupFields>
        <StyledSignupOptions>
          <StyledFooter>
            <GoogleSignIn />

            {signupOptions.slice(0, 3).map((item, index) => (
              <Stack key={index} component={Link} to={item.path}>
                {item.name}
              </Stack>
            ))}
          </StyledFooter>
        </StyledSignupOptions>
      </StyledInputForm>
    </StyledLogin>
  );
};

export default Login;
