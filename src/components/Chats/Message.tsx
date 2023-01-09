import React from "react";
import {Avatar, Typography} from "@mui/material";
import { deepOrange } from "@mui/material/colors";


import classes from './styles/Message.module.css';


interface Mprops {
    message:string,
    timestamp:string,
    photoURL?:string,
    displayName?:string,
}


export const MessageLeft = (props:Mprops) => {
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  const photoURL = props.photoURL ? props.photoURL : "dummy.js";
  const displayName = props.displayName ? props.displayName : "Jhon doe";
  return (
    <>
      <div className={classes.messageRow}>
        <Avatar
          alt={displayName}
          className={classes.orange}
          src={photoURL}
          sx={{width:{md:'30px'},height:{md:'30px'}}}
        ></Avatar>
        <div>
          <Typography className={classes.displayName} sx={{marginleft:'20px', fontSize:{md:'14px'}}}>{displayName}</Typography>
          <div className={classes.messageBlue}>
            <div>
              <p className={classes.messageContent}>{message}</p>
            </div>
            <div className={classes.messageTimeStampRight}>{timestamp}</div>
          </div>
        </div>
      </div>
    </>
  );
};



export const MessageRight = (props:Mprops) => {
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  return (
    <div className={classes.messageRowRight}>
      <div className={classes.messageOrange}>
        <p className={classes.messageContent}>{message}</p>
        <div className={classes.messageTimeStampRight}>{timestamp}</div>
      </div>
    </div>
  );
};
