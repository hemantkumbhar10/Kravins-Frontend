import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Slide, { SlideProps } from '@mui/material/Slide';
import { Paper, Box, Avatar, Typography, Divider, IconButton } from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';
import { MessageLeft, MessageRight } from "./Message";
import TextInput from './TextInputForMessage';
import classes from './styles/ChatModal.module.css';





const paperStyles = {
      // height: "80vh",
      maxWidth: 250,
      height: 350,
    //   display: "none",
      alignItems: "center",
      flexDirection: "column",
      left:0,
      top:0,
      zIndex:99999999,
}




type TransitionProps = Omit<SlideProps, 'direction'>;


// event: React.SyntheticEvent | Event, reason?: string
interface ChatModalProps{
    openChat:boolean
    chatCloseHandler:()=>void
    name:string
}

function TransitionRight(props: TransitionProps) {
    return <Slide {...props} direction="left" />;
  }



const ChatModal = (props:ChatModalProps) =>{



  const {openChat,chatCloseHandler,name} = props;


  
  const action = (
    <React.Fragment>
        <Paper sx={paperStyles} className={classes.chat_container} >
        <Paper sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',px:0.8, py:0.3, boxShadow:'none', backgroundColor:'#7750f8' }} className={classes.chat_title} >
          <Box display='flex' flexDirection='row' alignItems='center'>
          <Avatar alt="friend" src="" sx={{marginRight:1}}></Avatar>
          <Typography fontSize='16px' color='#fff'>{name}</Typography>  
          </Box>
          <IconButton aria-label="back" color="white" onClick={chatCloseHandler}>
            <CloseIcon />
        </IconButton>
        </Paper>
  
        <Divider sx={{width:'100%'}}></Divider>
        <Paper id="style-1" className={classes.messagesBody} sx={{overflow:'auto', padding:1, boxShadow:'none', borderRadius:'0'}}>
          <MessageLeft
            message="lorem ipsdyfgsa wesfnsjf sjfnsajf"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName=""
          />
          <MessageLeft
            message='We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate'
            timestamp="MM/DD 00:00"
            photoURL=""
            displayName="Marry"
          />
          <MessageRight
            message="We’ve trained a model called Chs mistakes, challenge incorrect premises, and reject inappropriate"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="Jhon"
          />
          <MessageRight
            message="We’ve trained a model called ChatGPT which "
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="Jhon"
          />
          <MessageRight
            message="We’ve trained a model called ChatGPT which "
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="Jhon"
          />
          <MessageRight
            message="We’ve trained a model called ChatGPT which "
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="Jhon"
          />
          <MessageRight
            message="We’ve trained a model called ChatGPT which "
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="Jhon"
          />
          <MessageRight
            message="We’ve trained a model called ChatGPT which "
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="Jhon"
          />
          <MessageRight
            message="We’ve trained a model called ChatGPT which "
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="Jhon"
          />
          <MessageRight
            message="We’ve trained a model called ChatGPT which "
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="Jhon"
          />
        </Paper>
        <TextInput/>
      </Paper>
    </React.Fragment>
  ); 





  return (
    <Snackbar
        anchorOrigin={{vertical:'bottom', horizontal:'right'}}
        open={openChat}
        onClose={chatCloseHandler}
        aria-labelledby="chat-modal"
        action={action}
        TransitionComponent={TransitionRight}
        sx={{'& .css-bfiahe-MuiPaper-root-MuiSnackbarContent-root':{minWidth:'auto',padding:0,}, 
        '& .css-1kr9x0n-MuiSnackbarContent-action':{p:0}
       }}
          />
  );
}


export default ChatModal;
