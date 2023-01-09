import React, {useState} from 'react';

//mui components
import { Paper, Box } from "@mui/material";


import classes from "./styles/ChatHomeMessages.module.css";

import ChatNotificationBox from './ChatNotificationBox'; 


// {[...Array(8)].map((e, i) => <ChatNotificationBox key={i}/>)}



const ChatFriendsMessages = () => {
  return (
    <Box
      sx={{position:'absolute',height:'85%',width:'100%', overflowY: "auto"}}
      className={classes.disable_scrollbar}
    >
     <ChatNotificationBox name='Jhone Doe'/>
     <ChatNotificationBox name='Jane Doe'/>
     <ChatNotificationBox name='Jane Doe'/>
     <ChatNotificationBox name='Jane Doe'/>
   
     <Box sx={{height:'40px',width:'100%'}}></Box>
    </Box>
  );
};

export default ChatFriendsMessages;
