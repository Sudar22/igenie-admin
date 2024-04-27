import { Button, Stack, styled } from "@mui/material";
import {
  GoogleAuthProvider,
  fetchSignInMethodsForEmail,
  signInWithPopup,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "./config";


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

const GoogleSignIn: React.FC = () => {

  // const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string | null>(
    localStorage.getItem("email")
  );

  const handleSignIn = async () => {
    try {
      const data = await signInWithPopup(auth, provider as GoogleAuthProvider).then(
        
      );

      if (data && data.user) {
        const user = data.user;
        setEmail(user.email);

        // Check if the email is already in use
        const signInMethods = await fetchSignInMethodsForEmail(
          auth,
          `${user.email}`
        );

        if (signInMethods && signInMethods.length > 0) {

          // The email is already in use
          console.log(`Email ${user.email} is already registered.`);
          // Handle the case where the email is already registered (e.g., prompt user to sign in)
        } else {
          // The email is not in use, proceed to create a new account
          console.log(`Creating a new account with email: ${user.email}`);
          console.log(`Creating a new account with email: ${user.displayName}`);
          console.log(`Creating a new account with email: ${user.photoURL}`);
          console.log(
            `Creating a new account with email: ${user.emailVerified}`
          );
          console.log(`Creating a new account with user: ${user}`);

          // Add your createUserWithEmailAndPassword logic here
          const userUID = user.uid;
          console.log(`User UID: ${userUID}`);


          // const credentials = {
          //   email: `${user.email}`,
          //   authenticationType: "GOOGLE",
          //   roles:{
          //     name:"Editor",
          //     description:"he is seller"
          //   }
          // };
  
          // dispatch(createSellerWithGmail(credentials));


        }

        // Display welcome alert
        alert(`Welcome, ${user.email}`);

        navigate("/dashboard/home");

    
      } else {
        console.error("Error: User data not found in the sign-in response.");
      }
    } catch (error) {
      // Log the full error object to the console
      console.error("Error signing in with Google:", error);
    }
  };


  const handleSignOut = () => {
    // Add sign-out logic if needed
    // Example: auth.signOut();
    setEmail(null);
    localStorage.removeItem("email");
  };

  useEffect(() => {
    // Add any additional initialization logic if needed
  }, []);

  return (
    <Stack>
      {email ? (
        <>
          <StyledButton onClick={handleSignOut}>Sign Out</StyledButton>
        </>
      ) : (
        <StyledButton onClick={handleSignIn}>Sign in with Google</StyledButton>
      )}
    </Stack>
  );
};

export default GoogleSignIn;
