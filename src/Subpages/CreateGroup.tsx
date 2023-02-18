import React,{ useState, ChangeEvent, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import useInput from "../hooks/use-intput";
import { useUserPosts } from "../services/protected/useUserPosts.api";


import {
  Box,
  Card,
  CardMedia,
  Tooltip,
  Grid,
  Typography,
  TextField,
  DialogActions,
  Avatar,
  Divider
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

import img from "../assets/group_placeholder.jpg";

import classes from "./styles/CreateGroup.module.css";
import CroppedImage from "../components/CropImage";
import { dataUrlToFile } from "../helpers/urlToFile";


interface GProps{
  open:boolean;
  close:()=>void;
}


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const isWithinLimmit = (value: string) =>
  value.trim().length > 30 ? false : true && value.trim() !== "";

const isDescrWithinLimmit = (value: string) =>
  value.trim().length > 240 ? false : true && value.trim() !== "";


const CreateGroup = ({open,close}:GProps) => {
  const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");
  const {authState} = useContext(AuthContext);
  const [cropperHide, setCropperHide] = useState(true); //hides cropper div when clicked close button
  const [imageSrc, setImageSrc] = useState<string | null>(null); //File upload image
  const [croppedImage, setCroppedImage] = useState<string>(""); //get cropped image from props


  const {createUserGroup} = useUserPosts();

  const {
    value: groupNameValue,
    hasError: groupNameHasError,
    isValid: groupNameIsValid,
    valueChangeHandler : groupNameChangeHandler,
    inputBlurHandler:groupNameBlurHandler,
    reset:resetGroupName
   } = useInput(isWithinLimmit);


  const {
    value: groupDescriptionValue,
    hasError: groupDescriptionHasError,
    isValid: groupDescriptionIsValid,
    valueChangeHandler : groupDescriptionChangeHandler,
    inputBlurHandler:groupDescriptionBlurHandler,
    reset:resetgroupDescription
   } = useInput(isDescrWithinLimmit);



  const getCroppedImageToUpload = (img: string) => {
    setCroppedImage(img);
  };

  const hideCropper = () => {
    setCropperHide(false);
  };
  const hideCropperClose = () => {
    setCropperHide(true);
  };

  function readFile(file: Blob) {
    //Creates image data url from blob
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  }
  const onFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    //Image file change handler
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl: any = await readFile(file);
      setImageSrc(imageDataUrl);
    }
  };


  let isFormValid = false;

  if(groupNameIsValid && groupDescriptionIsValid){
    isFormValid = true;
  }


  const createGroupHandler = async(e:React.FormEvent) =>{

    if(!isFormValid){
      return;
    }

    if(!croppedImage){
      return;
    }


  const extension = imageSrc!.split("/")[1].split(";")[0];

  const file = dataUrlToFile(imageSrc!, `${groupNameValue}.${extension}`);

  const formdata = new FormData();
  formdata.append('image',file);
  formdata.append('groupname', groupNameValue);
  formdata.append('groupbio', groupDescriptionValue);

  try{
    const data = await createUserGroup(formdata);
    console.log('Group created successfully', data);
  }catch(e){
    console.log('error occured sending data',e);
  };

  }



  return (
    <div>
      <Dialog
        open={open}
        scroll={scroll}
        TransitionComponent={Transition}
        aria-labelledby="scroll-dialog-create-group"
        aria-describedby="scroll-dialog-create-group-by-signed-in-user"
        sx={{
          zIndex: 999999,
          width: "100%",
          "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
            sm: { width: "85vw", maxWidth: "1200px" },
            lg: { width: "75vw", maxWidth: "700px" },
          },
        }}
      >
        <DialogTitle id="scroll-dialog-create-group" color="primary">
          Create Group
        </DialogTitle>
        <DialogContent dividers={true}>
          <Box component="form">
            <Grid container spacing={1}>
              <Grid
                item
                xs={12}
                sm={7}
                alignItems="center"
                justifyContent="center"
              >
                <Card sx={{ maxWidth: 350, boxShadow: "none", margin: "auto" }}>
                  <CardMedia
                    component="img"
                    image={croppedImage ? croppedImage : img}
                    height="140"
                    alt="new group"
                    sx={{ position: "relative" }}
                  />
                  <Tooltip title="Upload Image">
                    <IconButton
                      color="primary"
                      aria-label="upload group image"
                      component="label"
                      onClick={hideCropper}
                    >
                      <input
                        hidden
                        accept="image/*"
                        type="file"
                        onChange={onFileChange}
                      />
                      <PhotoCamera
                        fontSize="large"
                        sx={{ position: "absolute", top: -40, left: 10 }}
                      />
                    </IconButton>
                  </Tooltip>

                  {cropperHide === false && (
                    <CroppedImage
                      imageSrc={imageSrc}
                      getCroppedImageToUpload={getCroppedImageToUpload}
                      hideCropperClose={hideCropperClose}
                    />
                  )}
                </Card>
              </Grid>
              <Grid
                item
                xs={12}
                sm={5}
              >
                 <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Avatar sizes="small" src={authState.userInfo.profilepic ? authState.userInfo.profilepic : ''}></Avatar>
                <Typography
                  ml={1}
                  gutterBottom
                  variant="inherit"
                  fontWeight="bold"
                  component="div"
                >
                  {authState.userInfo.fullname ? authState.userInfo.fullname : 'null'}
                </Typography>
              </Box>
              <Divider sx={{ my: 1 }}></Divider>

              <TextField
                id="standard-basic"
                label="Group Name"
                variant="standard"
                sx={{ width: "100%", my: 1 }}
                onChange={groupNameChangeHandler}
                onBlur={groupNameBlurHandler}
                value={groupNameValue}
                helperText={groupNameHasError && "Title is empty or too big!"}
                FormHelperTextProps={{sx:{color:'red'}}}
              />
              <TextField
                id="standard-basic"
                label="Group Description"
                variant="standard"
                multiline
                rows={4}
                onChange={groupDescriptionChangeHandler}
                onBlur={groupDescriptionBlurHandler}
                value={groupDescriptionValue}
                helperText={groupDescriptionHasError && "Title is empty or too big!"}
                FormHelperTextProps={{sx:{color:'red'}}}
                fullWidth
                sx={{
                  my: 1,
                  backgroundColor: "#e7e3e3",
                  borderRadius: 2,
                  "& ..css-1iv5koc-MuiInputBase-root-MuiInput-root": {
                    display: "none",
                  },
                  "& .css-66dh3a-MuiInputBase-input-MuiInput-input": { mx: 1 },
                  "& .css-1unzfnd-MuiInputBase-root-MuiInput-root:before": {
                    display: "none",
                  },
                  "& .css-13rgreq-MuiFormLabel-root-MuiInputLabel-root": {
                    lineHeight: 1,
                    left: 7,
                    top: -5,
                  },
                  "& .css-1u7rucb-MuiFormLabel-root-MuiInputLabel-root.Mui-focused":
                    { lineHeight: 1, left: 7, top: 5 },
                }}
              />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={createGroupHandler}>Create Group</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateGroup;
