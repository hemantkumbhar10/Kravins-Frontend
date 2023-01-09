import React, {useState} from 'react';

//mui components
import { Paper, Box } from "@mui/material";


import classes from "./styles/ChatHomeMessages.module.css";

import ChatNotificationBox from './ChatNotificationBox'; 


// {[...Array(8)].map((e, i) => <ChatNotificationBox key={i}/>)}



const ChatGroupsMessages = () => {
  return (
    <Box
      sx={{position:'absolute',height:'85%',width:'100%', overflowY: "auto"}}
      className={classes.disable_scrollbar}
    >
     <ChatNotificationBox name='Marry Doe'/>
     <ChatNotificationBox name='Jane Doe'/>
     <ChatNotificationBox name='Jane Doe'/>
     <ChatNotificationBox name='Jane Doe'/>
     <ChatNotificationBox name='Jane Doe'/>
    </Box>
  );
};

export default ChatGroupsMessages;
