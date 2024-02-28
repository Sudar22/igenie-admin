import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useState } from "react";
import { auth } from "./config";
import PhoneInput from "react-phone-number-input";
import "./auth.css";

export const Phonesignin = () => {
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState<any>(null);
  const [otp, setOtp] = useState("");

  const sendOtp = async () => {
    try {
      const recaptchaContainer = document.getElementById("recaptcha");
      const recaptcha = new RecaptchaVerifier(auth, recaptchaContainer, {});
  
      // Ensure the phone number is in the international format with a country code
      const phoneNumber = `+${phone}`;
      
      // Check if the phone number is long enough (adjust the minimum length as needed)
      if (phoneNumber.length < 10) {
        console.error("Invalid phone number");
        return;
      }
  
      const confirmation = await signInWithPhoneNumber(auth, phoneNumber, recaptcha);
      setUser(confirmation);
      console.log(confirmation);
    } catch (error) {
      console.error(error);
    }
  };
  
  const verifyOtp = async () => {
    try {
      await user.confirm(otp);
      console.log("Verification successful");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack direction={"column"} spacing={2} width={"400px"}>
        <Typography variant="h4" gutterBottom textAlign={"center"}>
          Mobile Verification
        </Typography>
        <Stack
          direction={"column"}
          spacing={10}
          sx={{
            marginLeft: "1.56vw",
          }}
        >
          <PhoneInput
            defaultCountry={"IN"}
            value={phone}
            onChange={(value) => setPhone(value)}
            placeHolder={"phone number"}
            style={{ width: "30px", height: "50px", marginLeft: "100px" }}
          />
          <Stack alignItems={"center"}>
            <Button
              onClick={sendOtp}
              variant="contained"
              sx={{
                width: "100px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              Send OTP
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack id="recaptcha"></Stack>
      <Stack
        direction={"column"}
        spacing={2}
        width={"300px"}
        mt={2}
        alignItems={"center"}
      >
        <TextField
          onChange={(e) => setOtp(e.target.value)}
          variant="outlined"
          size="small"
          label="Enter OTP"
          sx={{
            border: "0.5px solid",
          }}
        />
        <Button onClick={verifyOtp} variant="contained" sx={{ width: "100px" }}>
          Verify
        </Button>
      </Stack>
    </Container>
  );
};
