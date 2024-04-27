// import React, { useEffect, useState } from "react";
// import { InitialState } from "./signup";
// import { styled } from "@mui/material";

// export default function useValidation(Data) {
//   const chkvalidation = (Data) => {
//     // console.log(Data);
//     //  const validationError = validateForm(Data);
//     //    console.log(validationError,"validationError");
//     // if (Object.keys(validationError).length === 0) {
//     //   // Form is valid, you can submit the data or perform other actions
//     //   console.log('Form is valid:', formData);
//     // } else {
//     //   // Form is invalid, update the errors state to show validation messages
//     //   setErrors(validationError);
//     //   console.log('Form is invalid:', validationError);
//     // }
//   };

//   // if (e.target.name === "confirmPassWord") {
//   //   setShowMatchStatus(true);
//   //   console.log(e.target.value);
//   //   // if (e.target.value === Data.password) {
//   //   //   // btnRef.current.disable = false;
//   //   //   // setMatchStatus("passwords match");
//   //   //   // setColor("green");
//   //   // } else {
//   //   //   // btnRef.current.disabled = true;
//   //   //   // setMatchStatus("passwords dont match");
//   //   //   // setColor("red");
//   //   // }
//   // }

//   // Perform form validation

//   // const handleValidationchk = (e) => {
//   //   e.preventDefault();
//   //   const validationErrors = validateForm(Data);
//   //   if (Object.keys(validationErrors).length === 0) {
//   //     // Form is valid, you can submit the data or perform other actions
//   //     console.log('Form is valid:', formData);
//   //   } else {
//   //     // Form is invalid, update the errors state to show validation messages
//   //     setErrors(validationErrors);
//   //     console.log('Form is invalid:', validationErrors);
//   //   }
//   // };

//   // if (e.target.name === "confirmPassWord") {
//   //   setShowMatchStatus(true);
//   //   console.log(e.target.value);
//   //   // if (e.target.value === Data.passWord) {
//   //   //   // btnRef.current.disable = false;
//   //   //   // setMatchStatus("passwords match");
//   //   //   // setColor("green");
//   //   // } else {
//   //   //   // btnRef.current.disabled = true;
//   //   //   // setMatchStatus("passwords dont match");
//   //   //   // setColor("red");
//   //   // }
//   // }

//   // Perform form validation

//   const validationErrors = {};

//   var nameRegex = /^[a-zA-Z]+$/;

//   // if (!Data.firstName.trim()) {
//   //   validationErrors.firstName = "Invalid first name";
//   // }

//   if (Data.firstname) {
//     if (!nameRegex.test(Data.firstname)) {
//       validationErrors.firstname = "Invalid first name";
//     }
//     if (Data.firstname.length < 3) {
//       validationErrors.firstname = "Invalid first name";
//     }
//   }

//   if (Data.lastname) {
//     if (!nameRegex.test(Data.lastname)) {
//       validationErrors.lastname = "Invalid last name";
//     }

//     if (Data.lastname.length < 0) {
//       validationErrors.lastname = "Invalid last name";
//     }
//   }

//   if (Data.email) {
//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(Data.email)) {
//       validationErrors.email = "Invalid email address";
//     }

//     if (Data.email.length < 5) {
//       validationErrors.email = "Invalid email address";
//     }
//   }

//   // Phone number validation
//   if (Data.phoneNo) {
//     const phoneRegex = /^\d{10}$/;
//     if (!phoneRegex.test(Data.phoneNo)) {
//       validationErrors.phoneNo = "Invalid phone number";
//     }

//     if (Data.phoneNo.length < 9) {
//       validationErrors.phoneNo = "Invalid phone number";
//     }
//   }

//   if (Data.password) {
//     // Password validation
//     const passwordRegex = /^[a-zA-Z]+$/;
//     // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     if (!passwordRegex.test(Data.password)) {
//       validationErrors.password = "Invalid password";
//     }
//   }

//   // if (Data.password !== Data.confirmPassWord) {
//   //   validationErrors.confirmPassWord = "Passwords do not match";
//   // }
//   if (Data.address) {
//     if (!Data.address) {
//       validationErrors.address = "address not vaild";
//     }
//     if (Data.address.length < 5) {
//       validationErrors.address = "address not vaild";
//     }

//   }

//   if (Data.gender) {
//     if (!Data.gender) {
//       validationErrors.gender = "gender not vaild";
//     }
//   }

//   if (Data.position) {
//     if (!Data.position) {
//       validationErrors.position = "position not vaild";
//     }
//   }

//   // Set validation errors, if any
//   // setErrors(validationErrors);

//   // // If there are no errors, perform further actions (e.g., submit the form)
//   // if (Object.keys(validationErrors).length === 0) {
//   //   // Perform form submission or any other action
//   //   console.log("Form submitted successfully");
//   // }

//   return {
//     validationErrors,
//   };
// }
