import React, { useState, useCallback, useContext } from "react";
import DatePicker from "react-date-picker";
import { Stack, Grid,Paper,Typography,Box,Button,Dialog,TextField,Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import AvatarUpload from "../components/AvatarUpload";
import { useFormInput } from "../hooks/use-formInput";
import classes from "./styles/EditUserProfile.module.css";
import ImageButtonBases from "../components/commons/ImageButtonBases";

import { AuthContext } from "../contexts/AuthContext";
import { useUserProfile } from "../services/protected/useUserProfile.api";


interface DProps {
  open: boolean;
  close: () => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


// eslint-disable-next-line
const mailFormat: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const fullNameWithinLimmit = (value: string) =>
  value.trim().length > 18 || value.trim() === "" ? false : true;

const isWithinLimmit = (value: string) =>
  value.trim().length > 15 || value.trim() === "" ? false : true;

const isEmail = (value: string) => value.match(mailFormat);


const EditUserProfile = ({ open, close, }: DProps) => {

  const authContext =  useContext(AuthContext);
  const {authState,updateAuthInfo} = authContext;
  const {updateprofile} = useUserProfile();
  const date_string = authState.userInfo.birthdate ? authState.userInfo.birthdate : "2000-01-01T18:30:00.000Z"
  const profile_pic = authState.userInfo.profilepic ? authState.userInfo.profilepic : ""
  const [date, setDate] = useState(new Date(date_string));
  const [openAvatarUploader, setOpenAvatarUploader] = useState(false);


  const {
    value: fullNameValue,
    hasError: fullNameHasError,
    isValid: fullNameIsValid,
    valueChangeHandler: fullNameChangeHandler,
    inputBlurHandler: fullNameBlurHandler,
    reset: resetFullNameInput,
  } = useFormInput(fullNameWithinLimmit,authState.userInfo.fullname!);

  const {
    value: usernameValue,
    hasError: usernameHasError,
    isValid: usernameIsValid,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: resetUsernameInput,
  } = useFormInput(isWithinLimmit,authState.userInfo.username!);

  const {
    value: emailValue,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useFormInput(isEmail, authState.userInfo.email!);

  let formIsValid = false;

  if (
    usernameIsValid &&
    emailIsValid &&
    fullNameIsValid &&
    (date !== null || undefined)
  ) {
    formIsValid = true;
  }

  const closeAvatarUploader =useCallback(() => {
    setOpenAvatarUploader((openAvatarUploader) => !openAvatarUploader);
  }, [openAvatarUploader]);

  const formSubmissionHandler = async(e: React.FormEvent) => {
    e.preventDefault();

    if (
      !usernameIsValid &&
      !emailIsValid &&
      !fullNameIsValid &&
      (date !== null || undefined)
    ) {
      return;
    }

    const userdata = {
      fullname:fullNameValue,
      email:emailValue,
      username:usernameValue,
      birthdate:date,

    }

  
    try{

      const {data}:any = await updateprofile(userdata);
      const userinfo = {
        fullname:data.fullname,
        username:data.username,
        email:data.email,
        profilepic:data.profilepic,
        birthdate:data.birthdate
      }
      await updateAuthInfo(userinfo)
    }catch(e){
      console.log(e);
    }
  };




  return (
    <>
    <Dialog
      sx={{
        zIndex: 999999,
        "& .MuiDialog-paper": {
          margin: { xs: "0" },
          maxHeight: { xs: "unset", md: "auto" },
          height: { xs: "auto", md: "auto" },
          maxWidth: "unset",
        },
      }}
      open={open}
      TransitionComponent={Transition}
      aria-describedby="alert-dialog-slide-description"
    >
      <Paper
        sx={{
          width: { xs: 350, sm: 450, md: 600 },
          backgroundColor: "#FFFFFF",
          margin: "auto",
          height: "auto",
          padding: 1,
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "14px", md: "18px" } }}
          fontWeight="bold"
          color="primary"
        >
          Edit Profile
        </Typography>
        <Box
          width="100%"
          sx={{ display: "flex", justifyContent: "center", my: 2 }}
          
        >
        <ImageButtonBases url={profile_pic} title='Edit'click={closeAvatarUploader}/>
        </Box>
        <Box component="form">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
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
                error={fullNameHasError}
                value={fullNameValue}
                helperText={fullNameHasError && "Fullname is empty or too long"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
                helperText={usernameHasError && "Username is empty or too long"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
                helperText={emailHasError && "Enter valid email address"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography fontSize="12px" color="#0000017f" mt={-0.2}>
                  Date of Birth
                </Typography>
                <Box
                  sx={{
                    "& .react-date-picker": { width: "100%" },
                    "& .react-date-picker__wrapper": {
                      padding: "10px 8px 10px 8px",
                      width: "100%",
                      borderRadius: "4px",
                      borderColor: "#0000004a",
                    },
                  }}
                >
                  <DatePicker onChange={setDate} value={date} />
                </Box>
              </div>
            </Grid>
          </Grid>
        </Box>

        <Stack
          direction="row"
          spacing={1}
          justifyContent="space-between"
          alignItems='center'
          marginTop={5}
        >
          <Box width='40%' display='flex' justifyContent='space-between'>
          <Button
            size="small"
            color="error"
            variant="outlined"
            onClick={close}
            sx={{height:'30px',width:'auto', fontSize:{md:'12px',xs:'9px'},}}
          >
            Delete Account
          </Button>
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={close}
            sx={{height:'30px',width:'auto', fontSize:{md:'12px',xs:'9px'},}}         
          >
            Change Password
          </Button>
          </Box>
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
        </Stack>
      </Paper>
    </Dialog>
    <AvatarUpload close={closeAvatarUploader} open={openAvatarUploader}/>
   </>
  );
};

export default EditUserProfile;


