import useInput from "../hooks/use-intput";

import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import Button from "./Button";

import classes from "./styles/Login.module.css";
import { SyntheticEvent } from "react";

const styles = {
  position: "unset",
  marginTop: "10vh",
  color: "#ffffff",
  backgroundColor: "#FF4B3A",
};

// eslint-disable-next-line
const mailFormat: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordFormat: RegExp =
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

// const isNotEmpty = (value: string) => value.trim() !== "";
const isEmail = (value: string) => value.match(mailFormat);
const isPassword = (value: string) => value.match(passwordFormat);

const Login = () => {
  const navigate = useNavigate();

  const { login } = useAuth(); 

  const {
    value: emailValue,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  const {
    value: passwordValue,
    hasError: passwordHasError,
    isValid: passwordIsValid,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(isPassword);

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e: SyntheticEvent) => {
    e.preventDefault();

    // console.log(emailValue, passwordValue);

    if (!emailIsValid && !passwordIsValid) {
      return;
    }
    login()
    resetEmailInput();
    resetPasswordInput();
    navigate("/home");
  };

  return (
    <Box
      component="form"
      className={classes.box}
      onSubmit={formSubmissionHandler}
    >
      <TextField
        autoComplete="on"
        error={emailHasError ? true : false}
        id="standard-basic-login-email"
        label="Email address"
        variant="standard"
        className={classes.textfields}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        value={emailValue}
        helperText={emailHasError && "Enter a valid email address"}
      />
      <TextField
        autoComplete="on"
        error={passwordHasError ? true : false}
        id="standard-basic-login-pass"
        label="Enter password"
        variant="standard"
        type='password'
        className={classes.textfields}
        onChange={passwordChangeHandler}
        onBlur={passwordBlurHandler}
        value={passwordValue}
        helperText={passwordHasError && "Enter a valid password"}
      />
      <div className={classes.links}>
        <Typography
          variant="caption"
          gutterBottom
          color="primary"
          textAlign="start"
        >
          Forgot password?{" "}
          <Link
            component="button"
            color="#0CA4FA"
            sx={{ fontSize: "0.8rem", top: "-3px" }}
            variant="body2"
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            Reset password
          </Link>
        </Typography>
      </div>
      <Button title="Login" customStyles={styles} disableProp={!formIsValid} />
    </Box>
  );
};

export default Login;
