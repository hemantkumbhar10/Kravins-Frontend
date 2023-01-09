import React,{ useState, ChangeEvent } from "react";

import {
  Box,
  Card,
  CardMedia,
  Tooltip,
  Grid,
  Typography,
  Stack,
  TextField,
  DialogActions
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import EditIcon from "@mui/icons-material/Edit";

import img from "../assets/group_placeholder.jpg";

import classes from "./styles/CreateGroup.module.css";
import CroppedImage from "../components/CropImage";


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



const CreateGroup = ({open,close}:GProps) => {
  const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");

  const [cropperHide, setCropperHide] = useState(true); //hides cropper div when clicked close button
  const [imageSrc, setImageSrc] = useState<string | null>(null); //File upload image
  const [croppedImage, setCroppedImage] = useState<string>(""); //get cropped image from props

  const [editGroupNameButtonClicked, setEditGroupNameButtonClicked] =
    useState(false);
  const [
    editGroupDescriptionButtonClicked,
    setEditGroupDescriptionButtonClicked,
  ] = useState(false);

  const editButtonHandler = (buttonIdentifier: string) => {
    if (buttonIdentifier === "group_description") {
      setEditGroupDescriptionButtonClicked(true);
    } else if (buttonIdentifier === "group_name") {
      setEditGroupNameButtonClicked(true);
    }
  };

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





  //////////////////////Use use-input hook to implement the 'back to headers when user leaves input field or out of focus'///////////////////











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
                <Card sx={{ maxWidth: 300,boxShadow:'none', marginX:'auto'}}>
                  {editGroupNameButtonClicked ? (
                    <TextField
                      sx={{ width: "100%", marginTop:1 }}
                      id="outlined-name"
                      label="Group Name"
                      size="small"
                      color="blue"
                      // value={name}
                      // onChange={handleChange}
                    />
                  ) : (
                    <Stack direction="row" spacing={1}>
                      <Typography variant="h6" color="primary" textAlign="left">
                        Delicious Street Food
                      </Typography>
                      <Tooltip title="Edit name">
                        <IconButton
                          color="link"
                          onClick={() => editButtonHandler("group_name")}
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  )}
                  {editGroupDescriptionButtonClicked ? (
                    <TextField
                      sx={{ width: "100%",marginTop:2 }}
                      id="outlined-name"
                      label="Group Description"
                      size="small"
                      color="blue"
                      multiline
                      rows={4}
                      
                      // value={name}
                      // onChange={handleChange}
                    />
                  ) : (
                    <Stack direction="row" spacing={1} marginTop={2}>
                      <Typography variant="body2" textAlign="justify" color='green'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad fugiat quaerat, voluptatum vel sint magnam. Excepturi iusto perspiciatis corrupti. Optio sequi facilis
                      </Typography>
                      <Tooltip title="Edit group 
                      description">
                        <IconButton
                          color="link"
                          onClick={() => editButtonHandler("group_description")}
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  )}
                </Card>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={close}>Create Group</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateGroup;
