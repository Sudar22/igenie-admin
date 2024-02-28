import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Snackbar,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
// import Snackbar from '@mui/material/Snackbar';
import { useSelector, useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import ModelContexts from "../hooks/ModelcontextProviders";
import { loginUser } from "../redux/reducers/vendorSlice";
// import { Phonesignin } from "./phonesignin";
// import GoogleIcon from "../assets/googleIcon";
// import Commonsvg from "../assets/commonsvg";

function getUser() {
  let user = localStorage.getItem("user");

  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

const StyledLogin = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height:600,
  marginTop: 30,
justifyContent:"center",
  alignItems: "center",
}));
const StyledLoginHeader = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
justifyContent:"center",
  height:60,
  alignItems: "center",
}));
const StyledInputForm = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: 500,
  height:400,
  boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  alignItems: "center",
}));

const StyledTextbox = styled("div")(({ theme }) => ({
  display:"flex",
  flexDirection: "column",
gap:20,
  width: 400,
}));
const StyledSignupOptions = styled("div")(({ theme }) => ({
  display:"flex",
  flexDirection: "column",
  alignItems: "center",

}));

const CustomButtonWrapper = ({ startDecorator, children }) => {
  return (
    <div>
      {startDecorator}
      {children}
    </div>
  );
};

const Login = () => {
  // const { setrequestloginData, UserProfile, loginSuccess } =
  //   useContext(ModelContexts);
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  // const {UserProfile} =useContext(ModelContexts)

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [data, setData] = useState([]);

  // redux state
  const { loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      return alert("Please enter correct Email id");
    } else if (!password) {
      return alert("Please enter correct Password");
    }
  };

  const getData = async (e) => {
    e.preventDefault();

    let name = e.target.name;
    console.log(data);

    setData((prev) => (prev = { ...prev, [name]: e.target.value }));

    return data;
  };

  const postData = async (e) => {
    e.preventDefault();
    // setrequestloginData(data)
    // UserProfile()
    // console.log(data);

    let userCredentials = { ...data };
    //  const {email,password} = data;

    // console.log('userCredentials',email,password);

    dispatch(loginUser(userCredentials)).then((result) => {
      if (result.payload) {
        setEmail("");
        setpassword("");

        setTimeout(function () {
          navigate("/dashboard/app");
        }, 1450);
      }
    });
  };

  const signupOptions = [
    {
      name: "Forgot password?",
      path: "registration",
    },
    {
      name: "Don't have an account? Sign Up",
      path: "/signup",
    },
  ];

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
    <StyledLogin>
      <StyledInputForm>
        <StyledLoginHeader>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            autoHideDuration={6000}
          >
            <Alert mt={5} severity="success">
              Login success !
            </Alert>
          </Snackbar>
          <Typography variant="h5" fontWeight="600">
            Login
          </Typography>
        </StyledLoginHeader>

        <StyledTextbox>
          {" "}
          
            <TextField
              name="email"
              label="Email"
              // required="true"
              autoFocus
              fullWidth
              onChange={getData}
            />

        
            <TextField
              name="password"
              label="Password"
              // required="true"
              fullWidth
              onChange={getData}
            />
      </StyledTextbox>

        <Box p={1}>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
        </Box>

        <StyledSignupOptions>
          <StyledButton>Login</StyledButton>
          <Stack component={Link} to={"signup"}>
            {/* <CustomButtonWrapper startDecorator={<Commonsvg name="google" width="3vh" height="3vh" />} > */}
            {/* <Button >
        Google signin
      </Button>
    </CustomButtonWrapper> */}
          </Stack>

          {signupOptions.slice(0, 3).map((item, index) => (
            <Stack key={index} component={Link} to={item.path}>
              {item.name}
            </Stack>
          ))}
        </StyledSignupOptions>
      </StyledInputForm>
    </StyledLogin>
  );
};

export default Login;
