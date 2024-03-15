import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import {
  signInWithPopup,
  GoogleAuthProvider,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postUserData } from "../redux/reducers/authSlice";

const GoogleSignIn: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string | null>(
    localStorage.getItem("email")
  );

  const handleSignIn = async () => {
    try {
      const data = await signInWithPopup(auth, provider as GoogleAuthProvider);

      if (data && data.user) {
        const user = data.user;
        setEmail(user.email);

        // Check if the email is already in use
        const signInMethods = await fetchSignInMethodsForEmail(auth, user.email);

        if (signInMethods && signInMethods.length > 0) {
          // The email is already in use
          console.log(`Email ${user.email} is already registered.`);
          // Handle the case where the email is already registered (e.g., prompt user to sign in)
        } else {
          // The email is not in use, proceed to create a new account
          console.log(`Creating a new account with email: ${user.email}`);
          console.log(`Creating a new account with email: ${user.displayName}`);
          console.log(`Creating a new account with email: ${user.photoURL}`);
          console.log(`Creating a new account with email: ${user.emailVerified}`);
          console.log(`Creating a new account with user: ${user}`);


          // Add your createUserWithEmailAndPassword logic here
          const userUID = user.uid;
          console.log(`User UID: ${userUID}`);
        }

        // Display welcome alert
        alert(`Welcome, ${user.email}`);

        navigate("/marketplace/products");

        const authenticationType = "GMAIL";
        const userinfo
        
        dispatch(postUserData({ user.email ,authenticationType }));
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
          <Button onClick={handleSignOut}>Sign Out</Button>
        </>
      ) : (
        <Button onClick={handleSignIn}>Sign in with Google</Button>
      )}
    </Stack>
  );
};

export default GoogleSignIn;
