import React, { useState, useContext, FormEvent } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { viewportContext } from "../../contexts/ViewportProvider";

import { Avatar, Box, Divider, IconButton, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useUserPosts } from "../../services/protected/useUserPosts.api";


import { AuthContext } from "../../contexts/AuthContext";


interface DProps {
    _id:string;
    groupname?: string;
    groupimage?: string;
    username: string;
    title: string;
    brief?: string;
    recipe?: string;
    open: boolean;
    close: () => void
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


const EditPost = ({ open, close, groupname, username, brief, title, recipe,_id }: DProps) => {

    const { authState } = useContext(AuthContext);
    const { width } = useContext(viewportContext);
    const [brieff, setBrief] = useState<string | undefined>(brief);
    const [recipee, setRecipe] = useState<string | undefined>(recipe);
    const [titlee, setTitle] = useState(title);
    const [isTouched, setIsTouched] = useState(false);

    const { updateUserPost } = useUserPosts();

    const titleIsValid = isWithinLimmit(titlee);
    const titleHasError = !titleIsValid && isTouched;

    const titleChangeHandler = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTitle(event.currentTarget.value);
    };

    const titleBlurHandler = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setIsTouched(true);
    };


    const reset = () => {
        setTitle('');
        setBrief('');
        setRecipe('');
        setIsTouched(false);
    }


    if (!width) {
        return <></>
    }

    const isDesktop = width < 900 ? true : false;


    const briefChangeHandler = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setBrief(event.currentTarget.value);
    };

    const recipeChangeHandler = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRecipe(event.currentTarget.value);
    };


    let isFormValid = false;

    if (titleIsValid) {
        isFormValid = true;
    }

    const updatePostHandler = async () => {

        const userdata = {
            postid:_id,
            title:titlee,
            brief:brieff,
            recipe:recipee
        }

        if (!isFormValid) {
            return;
        }
        try {
            const {data}:any = await updateUserPost(userdata);
            close();
            window.location.reload();
            reset();
        } catch (e) {
            console.log(e);
        }

    }


    return (
        <div>
            <Dialog
                sx={{
                    zIndex: 999999,

                    "& .MuiDialog-paper": {
                        maxWidth: 'unset',
                        maxHeight: 'unset'
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
                    <Typography sx={{ fontSize: "20px", pl: 2, pt: 1 }} >Create yummy post</Typography>
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
                                value={titlee}
                                helperText={titleHasError && "Title is empty or too big!"}
                            />
                            <TextField
                                id="standard-basic"
                                label="whats up food"
                                variant="standard"
                                multiline
                                rows={3}
                                onChange={briefChangeHandler}
                                value={brieff}
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
                                value={recipee}
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
                <DialogActions>
                    <Button onClick={close}>
                        Cancel
                    </Button>
                    <Button variant="contained" color="success" disabled={!isFormValid} onClick={updatePostHandler}>Post itt!</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default EditPost;
