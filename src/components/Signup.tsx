import React, {useState,SyntheticEvent} from 'react';
import useInput from "../hooks/use-intput";

import { Box, Select, MenuItem,InputLabel, SelectChangeEvent, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";



import Button from "./Button";

import classes from "./styles/Signup.module.css";

const styles = {
    position:'unset',
    marginTop:'5vh',
    color:'#ffffff',
    backgroundColor:'#FF4B3A'
}


/**
 * FOR BACKEND
 * 
 * REMEMBER TO MODIFY VERFICATION QUESTION AND ANSWER OBJECT HANDLER IN SIGNUP CONTROLLER
 * 
 * VERFICATION QUESTIONS ARE KEY VALUE PAIRS
 * 
 * HENCE MODIFY IT IN MONGO SCHEMA AND CONTROLLER
 * 
 * KEY ARE NUMBERS CONVERTED TO STRING SO ILL BE EASY TO FIND FROM DB LATER. PS. MAKE RELATIVE CHANGES IN CONTROLLER
 * 
 * ALSO LIMIT USERNAME CHARACTERS TO 15 CHARACTERS
 * 
 * MAKE SURE TO DELETE THIS COMMENT WHEN DONE IN BACKEND
 */

// eslint-disable-next-line
const mailFormat:RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordFormat:RegExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/; 

const isNotEmpty = (value:string)=> value.trim() !=='';
const isWithinLimmit = (value: string) => (value.trim().length > 15 ? false : true);
const isEmail = (value: string) => value.match(mailFormat);
const isPassword = (value: string) => value.match(passwordFormat);


const Signup = () => {
    const [verificationQuestion, setVerificationQuestion] = useState('10');

  const handleChange = (event: SelectChangeEvent) => {
    setVerificationQuestion(event.target.value as string);
  };

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

  const {
    value: passwordValue,
    hasError: passwordHasError,
    isValid: passwordIsValid,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput(isPassword);

  const {
    value: passwordConfirmValue,
    hasError: passwordConfirmHasError,
    isValid: passwordConfirmIsValid,
    valueChangeHandler: passwordConfirmChangeHandler,
    inputBlurHandler: passwordConfirmBlurHandler,
    reset: resetPasswordConfirmInput,
  } = useInput(isPassword);

  const {
    value: verficationAnswerValue,
    hasError: verficationAnswerHasError,
    isValid: verficationAnswerIsValid,
    valueChangeHandler: verficationAnswerChangeHandler,
    inputBlurHandler: verficationAnswerBlurHandler,
    reset: resetVerficationAnswerInput,
  } = useInput(isNotEmpty);


  const doPasswordMatch = passwordValue === passwordConfirmValue ? true : false;

  let formIsValid =false;

  if(usernameIsValid && emailIsValid && passwordIsValid && verficationAnswerIsValid && passwordConfirmIsValid && doPasswordMatch){
    formIsValid = true
  }

  const formSubmissionHandler = (e:SyntheticEvent) =>{

    e.preventDefault();

    if(!usernameIsValid && !emailIsValid && !passwordIsValid && !verficationAnswerIsValid && !passwordConfirmIsValid && !doPasswordMatch){
      return
    };
    let verfication_handler = {[verificationQuestion]:verficationAnswerValue};
    console.log(usernameValue, emailValue, passwordValue,passwordConfirmValue, verfication_handler);
    resetUsernameInput();
    resetEmailInput();
    resetPasswordInput();
    resetVerficationAnswerInput();
    resetPasswordConfirmInput();
  }



  return (
    <Box component="form" className={classes.box} onSubmit={formSubmissionHandler}>
      <TextField
        autoComplete='on'
        error={usernameHasError ? true : false}
        id="standard-basic-signup-username"
        label="Username"
        variant="standard"
        className={classes.textfields}
        onChange={usernameChangeHandler}
        onBlur={usernameBlurHandler}
        value={usernameValue}
        helperText={usernameHasError && 'Username is too long'}
      />
      <TextField
       autoComplete='on'
        error={emailHasError ? true : false}
        id="standard-basic-signup-email"
        label="Email address"
        variant="standard"
        className={classes.textfields}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        value={emailValue}
        helperText={emailHasError && 'Enter a valid email address'}
      />
      <TextField
      autoComplete='on'
      error={passwordHasError ? true : false}
        id="standard-basic-signup-pass"
        label="Password"
        variant="standard"
        type='password'
        className={classes.textfields}
        onChange={passwordChangeHandler}
        onBlur={passwordBlurHandler}
        value={passwordValue}
        helperText={passwordHasError && 'Enter a valid password'}
      />

      <TextField
      autoComplete='on'
      error={passwordConfirmHasError ? true : false}
        id="standard-basic-signup-pass-confirm"
        label="Confirm Password"
        type='password'
        variant="standard"
        className={classes.textfields}
        onChange={passwordConfirmChangeHandler}
        onBlur={passwordConfirmBlurHandler}
        value={passwordConfirmValue}
        helperText={passwordConfirmHasError && 'Enter a valid password'}
      />
      {!doPasswordMatch && <Typography className={classes.error}>Password does not match!</Typography>}
      <div className={classes.select_div}>
      <InputLabel id="demo-simple-select-label" className={classes.input_label} defaultValue='10'>Choose a question</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={verificationQuestion}
    label="Choose a question"
    onChange={handleChange}
    className={classes.menu_items}
  >
    <MenuItem value={10} className={classes.menu_items} >What city you were born in?</MenuItem>
    <MenuItem value={20} className={classes.menu_items}>What was your childhood nickname?</MenuItem>
    <MenuItem value={30} className={classes.menu_items}>What school did you attend for sixth grade?</MenuItem>
    <MenuItem value={40} className={classes.menu_items}>Where were you when you had your first kiss?</MenuItem>
    <MenuItem value={50} className={classes.menu_items}>What is your favourite food made by your mom?</MenuItem>
  </Select>
  <TextField
  autoComplete='on'
      error={verficationAnswerHasError ? true : false}
        id="standard-basic-signup-verification-answer"
        label="Answer"
        variant="standard"
        className={classes.textfields}
        onChange={verficationAnswerChangeHandler}
        onBlur={verficationAnswerBlurHandler}
        value={verficationAnswerValue}
        helperText={verficationAnswerHasError && 'Dont leave this empty please!'}
      />
  </div>
      
      <Button title="Sign up" customStyles={styles} disableProp={!formIsValid}/>
    </Box>
  );
};

export default Signup;
