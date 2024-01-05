import {
    Alert,
    Button,
    Card,
    CardContent,
    Checkbox,
    FormControlLabel,
    Grid,
    Snackbar,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useContext, useEffect, useState } from "react";
  // import Snackbar from '@mui/material/Snackbar';
  import { useSelector, useDispatch } from "react-redux";
  
  import { Link, useNavigate } from "react-router-dom";
  import ModelContexts from "../hooks/ModelcontextProviders";
  import { loginUser } from "../redux/reducers/vendorSlice";
  
  function getUser() {
    let user = localStorage.getItem("user");
  
    if (user) {
      user = JSON.parse(user);
    } else {
      user = null;
    }
    return user;
  }
  
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
  
    // const handleClick = (newState) => () => {
    //   setState({ ...newState, open: true });
    // };
  
    // useEffect(() => {
    //   if (loginSuccess === true) {
    //     setState({ ...state, open: true });
    //     setTimeout(() => {
    //       navigate("/dashboard/app");
    //     }, 3000);
    //   }
    // }, [loginSuccess]);
  
    return (
      <Grid pt={5} pl={10} pr={10}>
        <Grid>
          <Card align="center">
            <CardContent>
              <Grid p={5}>
                <Snackbar
                  anchorOrigin={{ vertical, horizontal }}
                  open={open}
                  autoHideDuration={6000}
                >
                  <Alert mt={5} severity="success">
                    Login success !
                  </Alert>
                </Snackbar>
                <Typography variant="h4" color="primary">
                  Login
                </Typography>
  
                <Typography variant="h5" color="textSecondary" p={1}>
                  Welcome
                </Typography>
              </Grid>
  
              <Grid>
                {/* <Form> */}
                  <Grid
                    container
                    padding={2}
                    xl={4}
                    sm={6}
                    lg={4}
                    xs={12}
                    flexDirection={"column"}
                    height={500}
                  >
                    <Grid p={1}>
                      <TextField
                        name="email"
                        label="Email"
                        required="true"
                        autoFocus
                        fullWidth
                        onChange={getData}
                      />
                    </Grid>
                    <Grid p={1}>
                      <TextField
                        name="password"
                        label="Password"
                        required="true"
                        fullWidth
                        onChange={getData}
                      />
                    </Grid>
                    <Grid align="left" p={1}>
                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                      />
                    </Grid>
                    <Grid pt={4}>
                      <Button
                        variant="contained"
                        onClick={(e) => {
                          postData(e);
                        }}
                      >
                        Login
                      </Button>
                    </Grid>
  
                    <Grid
                      container
                      pt={5}
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid item>
                        <Link to="/" variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item align="right">
                        <Link to="/registration" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                {/* </Form> */}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  };
  
  export default Login;
  