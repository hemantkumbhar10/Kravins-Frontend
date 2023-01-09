import React from "react";
import { Paper, Grid, Box, Avatar, Typography, Divider, List, ListItem, ListItemAvatar, ListItemText, IconButton } from "@mui/material";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { MessageLeft, MessageRight } from "./Message";
import classes from "./styles/Chat.module.css";
import TextInput from './TextInputForMessage';
import { NavLink, Outlet } from "react-router-dom";




const MyNavLink = React.forwardRef<any, any>((props, ref) => (
  <NavLink
    ref={ref}
    to={props.to}
    className={({ isActive }) =>
      `${props.className} ${isActive ? props.activeClassName : ""}`
    }
    end
  >
    {props.children}
  </NavLink>
));



const paperStyles = {
      width: '100%',
      height: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "fixed",
      left:0,
      top:0,
      zIndex:99999999,
}

const Chat = () => {
  return (

      <Paper sx={paperStyles} className={classes.chat_container} >
        <Paper sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'flex-start', width:'100%', padding:1,boxShadow:'none', backgroundColor:'#7750f8' }} className={classes.chat_title} >
        <IconButton aria-label="back" color="white" component={NavLink} to='/home/chats'>
            <ArrowBackIcon />
        </IconButton>
          <Avatar alt="friend" src="" sx={{marginRight:1}}></Avatar>
          <Typography variant="h6" color='#fff'>Jhon Doe</Typography>  
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
  );
};

export default Chat;






    