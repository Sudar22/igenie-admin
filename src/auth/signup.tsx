import {
  Button,
  Card,
  Container,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
// import { auth } from "./config";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import { MuiTelInput } from "mui-tel-input";
import { useNavigate } from "react-router-dom";

export const Signup: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState<any>(null);
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleFormSubmit = async () => {
    try {
      const recaptchaContainer = document.getElementById("recaptcha");

      if (!recaptchaContainer) {
        console.error("Recaptcha container not found");
        return;
      }

      const recaptcha = new RecaptchaVerifier(auth, recaptchaContainer, {});
      const phoneNumber = `+${phone}`;

      // Check if the phone number is long enough (adjust the minimum length as needed)
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
    } catch (error) {
      console.error(error);
    }
  };

  const verifyOtp = async () => {
    try {
      await confirmationResult.confirm(otp);
      console.log("Verification successful");

      // Access the user's UID from the confirmation result
      const user = confirmationResult.user;

      // Proceed with further actions if needed

      // Redirect to the desired route
      navigate("/marketplace/products");

      // Show welcome alert
      alert(`Welcome`);
    } catch (err) {
      console.error(err);
    }
  };

  const PhoneInput = styled(MuiTelInput)(({ theme }) => ({
    display: "flex",
    // width: 440,
    height: 60,
    gap: 10,
  }));

  const StyledRootSignup = styled("div")(({ theme }) => ({
    width: "100%",
    height: 500,
    marginTop: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledHeader = styled("div")(({ theme }) => ({
    width: "100%",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }));
  const StyledSignupFields = styled("div")(({ theme }) => ({
    width: "100%",

    display: "flex",
    flexDirection: "column",
    gap: 10,
  }));

  const StyledCard = styled(Card)(({ theme }) => ({
    width: 440,
    height: 400,
    // backgroundColor: "transparent",
    gap: 10,
    display: "flex",
    padding: theme.spacing(3, 5),
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: theme.shadows[4],
  }));

  const StyledButton = styled(Button)(({ theme }) => ({
    width: 200,

    margin: theme.spacing(0, 1),

    fontSize: 10,
    backgroundColor: "#000",
    color: "#FFF",
    "&:hover": {
      backgroundColor: "#57A845",
      // opacity:0.6
    },
  }));

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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Stack>
          <Stack>
            <TextField
              name="password"
              label="Password"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
              value={password}
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
