import React, { useState } from "react";
import DatePicker from "react-date-picker";

import useInput from "../hooks/use-intput";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Stack, styled } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import userImage from "../assets/salat.png";

import classes from "./styles/EditUserProfile.module.css";





/**
 * 
 * REMEMBER TO CREATE IMAGE UPLOAD WITH PREVIEW FOR USER PROFILE PIC ;) 
 * 
 * CHEEEEEEEEERS!!
 * 
 */


const ImageStyled = styled("img")({
  borderRadius: "50%",
  zIndex: 1,
  marginTop: "50px",
});

// eslint-disable-next-line
const mailFormat: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



const fullNameWithinLimmit = (value: string) => (value.trim().length > 18 ||  value.trim() === "") ? false : true;



const isWithinLimmit = (value: string) => (value.trim().length > 15 ||  value.trim() === "") ? false : true;
const isEmail = (value: string) => value.match(mailFormat);

const EditUserProfile = () => {
  const [date, setDate] = useState(new Date());

  const {
    value: fullNameValue,
    hasError: fullNameHasError,
    isValid: fullNameIsValid,
    valueChangeHandler: fullNameChangeHandler,
    inputBlurHandler: fullNameBlurHandler,
    reset: resetFullNameInput,
  } = useInput(fullNameWithinLimmit);

  const {
    value: usernameValue,
    hasError: usernameHasError,
    isValid: usernameIsValid,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: resetUsernameInput,
  } = useInput(isWithinLimmit);

  const {
    value: emailValue,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  let formIsValid = false;

  if (
    usernameIsValid &&
    emailIsValid &&
    fullNameIsValid &&
    (date !== null || undefined)
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !usernameIsValid &&
      !emailIsValid &&
      !fullNameIsValid &&
      (date !== null || undefined)
    ) {
      return;
    }
    console.log(usernameValue, emailValue, fullNameValue, date);
    resetUsernameInput();
    resetEmailInput();
    resetFullNameInput();
  };

  return (
    <>
      <Paper
        className={classes.user_profile_container}
        sx={{
          flexGrow: 1,
          maxWidth: 350,
          backgroundColor: "#FFFFFF",
          margin: "auto",
          height: "auto",
          padding: 1,
        }}
      >
        <Grid container spacing={0} columns={12}>
          <Grid item xs={12} sm={5}>
            <Box sx={{ maxWidth: 350 }}>
              <Paper
                sx={{
                  height: 300,
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow:'none'
                }}
              >
                <Paper
                  sx={{
                    width: "100%",
                    backgroundColor: "#FF4B3A",
                    height: 150,
                    position: "absolute",
                    top: 0,
                  }}
                ></Paper>
                <ImageStyled
                  src={userImage}
                  alt="user"
                  sx={{
                    height: { xs: 80, md: 100 },
                    width: { xs: 80, md: 100 },
                  }}
                />
                <Typography textAlign="center" variant="h5" marginTop="10px">
                  Jhon Doe
                </Typography>
                <Typography textAlign="center" variant="subtitle1">
                  @hamncheese69
                </Typography>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Box
              component="form"
              className={classes.user_edit_form}
            >
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                margin="normal"
                sx={{
                  "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                    padding: "12px 8px 15px 8px",
                  },
                }}
                onChange={fullNameChangeHandler}
                onBlur={fullNameBlurHandler}
                value={fullNameValue}
                error={fullNameHasError}
                helperText={fullNameHasError && 'Fullname is empty or too long'}
              ></TextField>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                sx={{
                  "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                    padding: "12px 8px 15px 8px",
                  },
                }}
                onChange={usernameChangeHandler}
                onBlur={usernameBlurHandler}
                error={usernameHasError}
                value={usernameValue}
                helperText={usernameHasError && 'Username is empty or too long'}
              ></TextField>
              <TextField
                label="Email"
                variant="outlined"
                margin="normal"
                sx={{
                  "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                    padding: "12px 8px 15px 8px",
                  },
                }}
                fullWidth
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                value={emailValue}
                error={emailHasError}
                helperText={emailHasError && 'Enter valid email address'}
              ></TextField>
              {/* <TextField label="Date of Birth" variant="outlined" fullWidth margin="normal" sx={{'& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input':{padding:'12px 8px 15px 8px'}}}></TextField> */}
              <div
                style={{
                  margin: "auto 0 5px 0",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="subtitle1" color="primary">
                  Date of Birth
                </Typography>
                <DatePicker onChange={setDate} value={date} />
              </div>
              <Button
                size="large"
                variant="contained"
                color="success"
                sx={{ marginTop: 2 }}
                onClick={formSubmissionHandler}
                disabled={!formIsValid}
              >
                Update Profile
              </Button>
            </Box>
            <Stack
              direction="row"
              spacing={1}
              justifyContent="flex-end"
              marginTop={5}
            >
              <Button size="small" color="error" variant="contained">
                Delete Account
              </Button>
              <Button size="small" color="warning" variant="contained">
                Change Password
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default EditUserProfile;
