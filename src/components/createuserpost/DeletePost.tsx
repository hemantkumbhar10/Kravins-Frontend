import React, {useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { viewportContext } from "../../contexts/ViewportProvider";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useUserPosts } from "../../services/protected/useUserPosts.api";




interface DProps {
    _id:string;
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




const DeletePost = ({ open, close,_id }: DProps) => {
    const { width } = useContext(viewportContext);

    const { deleteUserPost } = useUserPosts();



    if (!width) {
        return <></>
    }



    const deletePostHandler = async () => {

        const userdata = {
            postid:_id,
        }
        try {
            const {data}:any = await deleteUserPost(_id);
            console.log(data);
            close();
            window.location.reload();
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
                    <Typography fontSize='h4' color='primary' fontWeight='bold' height={80} textAlign='center'>Are you sure you want to delete this post? </Typography>
                           
                </Paper>
                <DialogActions>
                    <Button onClick={close} color="success">
                        Cancel
                    </Button>
                    <Button variant="contained" color="error" onClick={deletePostHandler}>Delete</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DeletePost;
