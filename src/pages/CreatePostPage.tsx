import React,{useState, useContext, FormEvent} from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { viewportContext } from "../contexts/ViewportProvider";

import { Avatar, Box, Divider, IconButton, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import PhotoEditor from "../components/createuserpost/PhotoEditor";
import useInput from "../hooks/use-intput";
import { useUserPosts } from "../services/protected/useUserPosts.api";
import { dataUrlToFile } from "../helpers/urlToFile";

import { AuthContext } from "../contexts/AuthContext";


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


const isWithinLimmit = (value: string) =>
  value.trim().length > 45 ? false : true && value.trim() !== "";


const CreatePostPage = ({open,close}:DProps) => {
  const {authState} = useContext(AuthContext);
  const [postImage, setPostImage] = useState<string|undefined>(undefined);
  const {width}  = useContext(viewportContext);
  const [brief, setBrief] = useState<string | undefined>(undefined);
  const [recipe, setRecipe] = useState<string | undefined>(undefined);

  const {createUserPost} = useUserPosts();

 const {
  value: titleValue,
  hasError: titleHasError,
  isValid: titleIsValid,
  valueChangeHandler : titleChangeHandler,
  inputBlurHandler: titleBlurHandler,
  reset:resetTitle
 } = useInput(isWithinLimmit);

  if(!width){
    return<></>
  }

  const isDesktop = width < 900 ? true : false;

  const getFinalImage = (img:string|undefined)=>{
    setPostImage(img);
  }

  const selectAnotherImage = ()=>{
    setPostImage(undefined);
  }


  const briefChangeHandler = (event:React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setBrief(event.currentTarget.value);
  };

  const recipeChangeHandler = (event:React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRecipe(event.currentTarget.value);
  };


  let isFormValid = false;

  if(titleIsValid){
    isFormValid = true;
  }

  const postSubmissionHandler = async(e:FormEvent)=>{
    if(!isFormValid){
      return;
    }

  if(!postImage){
    return;
  }

  const extension = postImage.split("/")[1].split(";")[0];

  // console.log('heres file type------->', extension)

  const file = dataUrlToFile(postImage, `${titleValue}.${extension}`);

  // console.log('herees the file: ',file);
  const formdata = new FormData();
  formdata.append('image',file);
  formdata.append('title', titleValue);
  if(recipe){
    formdata.append('description', recipe);
  }
  if(brief){
    formdata.append('brief', brief);
  }


  try{
    const data = await createUserPost(formdata);
    console.log('Post uploaded successfully', data);
  }catch(e){
    console.log('error occured sending data',e);
  }

  }
   

  return (
    <div>
      <Dialog
        sx={{
          zIndex: 999999,
          
          "& .MuiDialog-paper": {
            maxWidth:'unset',
          maxHeight:'unset'
          },
        }}
        open={open}
        TransitionComponent={Transition}
        aria-describedby="alert-dialog-slide-description"
      >
        { !postImage ? <PhotoEditor getFinalCroppedImage={getFinalImage}/> : <>
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
              <ButtonBase sx={{ maxWidth: 300, maxHeight: 400 }} onClick={selectAnotherImage}>
               
                <Img alt="complex" src={postImage} />
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
                label="Post title"
                variant="standard"
                sx={{ width: "100%", my: 1 }}
                onChange={titleChangeHandler}
                onBlur={titleBlurHandler}
                value={titleValue}
                helperText={titleHasError && "Title is empty or too big!"}
              />
              <TextField
                id="standard-basic"
                label="whats up food"
                variant="standard"
                multiline
                rows={3}
                onChange={briefChangeHandler}
                value={brief}
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
                onChange={recipeChangeHandler}
                value={recipe}
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

            </Grid>
          </Grid>
        </Paper>
        </>
        }
        <DialogActions>
          <Button onClick={close}>
            Cancel
          </Button>
          {postImage && <Button variant="contained" color="success" onClick={postSubmissionHandler} disabled={!isFormValid}>Post itt!</Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreatePostPage;
