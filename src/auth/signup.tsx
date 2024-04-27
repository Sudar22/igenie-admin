import {
  Button,
  Card,
  Stack,
  TextField,
  Typography,
  styled
} from "@mui/material";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { MuiTelInput } from "mui-tel-input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./config";
// import { postUserData } from "../redux/reducers/authSlice";


export const PhoneInput = styled(MuiTelInput)(() => ({
  display: "flex",
  height: 60,
  gap: 10,
}));

export const StyledRootSignup = styled("div")(() => ({
  width: "100%",
  height: 500,
  marginTop: 30,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledHeader = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const StyledSignupFields = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 20,
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  width: 440,
  height: 400,
  gap: 10,
  display: "flex",
  padding: theme.spacing(3, 5),
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: theme.shadows[4],
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  width: 200,
  margin: theme.spacing(0, 1),
  fontSize: 10,
  backgroundColor: "#000",
  color: "#FFF",
  "&:hover": {
    backgroundColor: "#57A845",
  },
}));

export const Signup: React.FC = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState<any>(null);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [username, setUsername] = useState("");
  const [userDetails, setUserDetails] = useState<
    Array<{ uid: string; username: string; phoneNumber: string }>
  >([]);

  const handleFormSubmit = async () => {
    try {
      const recaptchaContainer = document.getElementById("recaptcha");

      if (!recaptchaContainer) {
        console.error("Recaptcha container not found");
        return;
      }

      const recaptcha = new RecaptchaVerifier(auth, recaptchaContainer, {});

      // Check if the phone number is long enough (adjust the minimum length as needed)
      const phoneNumber = `+${phone}`;
      if (phoneNumber.length < 10) {
        console.error("Invalid phone number");
        return;
      }

      const confirmation = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        recaptcha
      );
      setConfirmationResult(confirmation);

      // After OTP sending, show the OTP input field
      setShowOtpInput(true);
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

  const verifyOtp = async () => {
    try {
      if (!confirmationResult) {
        console.error("Confirmation result not found");
        return;
      }

      await confirmationResult.confirm(otp);
      console.log("Verification successful");

      // Fetch the user from Firebase Authentication
      const user = await auth.currentUser;

      if (user) {
        const userUID = user.uid;
        const PhoneNumber = user.phoneNumber ?? "";

        // Store user details in an array
        const newUserDetails = [
          ...userDetails,
          { uid: userUID, username, phoneNumber: PhoneNumber },
        ];

        // const userCreditional = {
        //   PhoneNumber: user.phoneNumber ?? "",
        //   authenticationType: "PHONE",
        // };

        // dispatch(postUserData(userCreditional));
        setUserDetails(newUserDetails);
        localStorage.setItem("userDetails", JSON.stringify(newUserDetails));
        if (isVerified) {
          navigate("/marketplace/products");
        }
        // Redirect to the desired route
        // navigate("/marketplace/products");
        setIsVerified(true);
        console.log(`User UID: ${userUID}`);
        // console.log(`User Phone Number: ${userPhoneNumber}`);
        console.log(`Username: ${username}`);
        // Show welcome alert
        alert(`Welcome, User UID: ${userUID}`);
      } else {
        console.error("User not found after OTP confirmation");
      }
    } catch (err) {
      console.error(err);
    }
  };



  return (
    <StyledRootSignup>
      <StyledCard>
        <StyledHeader>
          <Typography variant="h5">Register Now</Typography>
        </StyledHeader>
        <StyledSignupFields>
          <Stack mt={"4.17vh"}>
            <TextField
              name="username"
              label="Username"
              autoFocus
              fullWidth
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </Stack>

          <Stack direction={"column"} spacing={10}>
            <PhoneInput
              defaultCountry={"IN"}
              value={phone}
              onChange={(value) => setPhone(value)}
              name="Phone No"
              label="Phone No"
            />
          </Stack>
        </StyledSignupFields>
        <Stack
          direction={"column"}
          spacing={10}
          sx={{
            marginLeft: "1.56vw",
          }}
        >
          {/* Include the reCAPTCHA StyledRootSignup */}
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

        <Stack>
          {!showOtpInput ? (
            <StyledButton type="button" onClick={handleFormSubmit}>
              Create Account
            </StyledButton>
          ) : (
            <StyledButton type="button" onClick={verifyOtp}>
              Verify OTP and Create Account
            </StyledButton>
          )}
        </Stack>
      </StyledCard>
    </StyledRootSignup>
  );
};
