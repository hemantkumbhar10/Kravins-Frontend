import React,{useContext} from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { viewportContext } from "../contexts/ViewportProvider";

import { Avatar, Box, Divider, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import AddIcon from '@mui/icons-material/Add';

import { IconButton } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import { Link } from "react-router-dom";

//assets
import coffeeImage from "../assets/coffee.jpg";
import horizontalImage from "../assets/machiato.jpg";

const Img = styled("img")({
  objectFit: "contain",
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

interface DProps{
  open:boolean;
  close:()=>void
}



const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreatePostPage = ({open,close}:DProps) => {

  const {width}  = useContext(viewportContext);

  if(!width){
    return<></>
  }

  const isDesktop = width < 900 ? true : false;


  return (
    <div>
      <Dialog
        sx={{
          zIndex: 999999,
          "& .MuiDialog-paper": {
            margin: { xs: "0" },
            maxHeight: { xs: "unset", md: "auto" },
            height: { xs: "100%", md: "auto" },
          },
        }}
        open={open}
        TransitionComponent={Transition}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {isDesktop && 
          <IconButton
            aria-label="navigate to home"
            color="primary"
            onClick={close}
          >
            <KeyboardBackspaceIcon fontSize="large" />
          </IconButton>}
          <Typography sx={{ fontSize: "20px",pl:2,pt:1 }} >Create yummy post</Typography>
        </Box>
        <Paper
          sx={{
            p: 2,
            margin: "auto",
            maxWidth: 800,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid container spacing={2}>
            <Grid item m="auto">
              <ButtonBase sx={{ maxWidth: 300, maxHeight: 400 }}>
                {/* coffeeImage */}
                {/* horizontalImage */}
                {/* <Box sx={{width:300, height:400, display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#e7e3e3'}}>
                    <AddIcon sx={{m:'auto'}} fontSize='large'/>
                </Box> */}
                <Img alt="complex" src={coffeeImage} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm sx={{ width: { md: 500 } }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Avatar sizes="small">h</Avatar>
                <Typography
                  ml={1}
                  gutterBottom
                  variant="inherit"
                  fontWeight="bold"
                  component="div"
                >
                  hamncheese
                </Typography>
              </Box>
              <Divider sx={{ my: 1 }}></Divider>

{/*//////////////////////////////////////////// Edit in progress /////////////////////////////////////////// */}

              <TextField
                id="standard-basic"
                label="Title*"
                variant="standard"
                sx={{ width: "100%", my: 1 }}
              />
              <TextField
                id="standard-basic"
                label="whats up food"
                variant="standard"
                multiline
                rows={3}
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
              <TextField
                id="standard-basic"
                label="Your Recipe goes here :)"
                variant="standard"
                multiline
                rows={6}
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
{/*//////////////////////////////////////////// Edit in progress /////////////////////////////////////////// */}






            </Grid>
          </Grid>
        </Paper>
        <DialogActions>
          <Button onClick={close}>
            Cancel
          </Button>
          <Button variant="contained" color="success" onClick={close}>Post itt!</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreatePostPage;
