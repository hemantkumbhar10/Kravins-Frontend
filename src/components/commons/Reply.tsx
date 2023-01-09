import React, { useState } from "react";

import {styled} from '@mui/material/styles';
import Paper from "@mui/material/Paper";
import {Box} from '@mui/material'
import TextField from "@mui/material/TextField";
// import AddReactionIcon from '@mui/icons-material/AddReaction';
import { IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

// import StyledMenu from "../../ui/StyledMenu";

// import data from '@emoji-mart/data';
// import Picker from '@emoji-mart/react';

import classes from './styles/Reply.module.css';
// import MenuItem from "@mui/material/MenuItem";



const CssTextField = styled(TextField)({

        // '& .css-66dh3a-MuiInputBase-input-MuiInput-input':{
        //     marginTop:'-45px !important'
        // },

    '& .css-1iv5koc-MuiInputBase-root-MuiInput-root:before':{
        borderBottom:'none'
    },
    '& .css-1iv5koc-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before':{
        borderBottom:'none'
    },
    
    '& .css-1iv5koc-MuiInputBase-root-MuiInput-root:after':{
        borderBottom:'none'
    }
    
})



const Reply = () => {

  const [replyText, setReplytext] = useState('');



  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setReplytext(e.target.value);
  }


  const submitReplyHandler = () =>{
    console.log(replyText);

  }





  return (
    <Paper
    className={classes.reply_container}
      sx={{
        maxWidth:350,
        margin:'auto',
        backgroundColor:'#E5E5E5',
        padding:'3px 0px 3px 8px',
        display:"flex",
        flexDirection:'row'
      }}
    >
        <Box component='form' onChange={handleChange} sx={{
            width:'100%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
      }} >
        <CssTextField placeholder="would.....?" multiline variant="standard" sx={{width:'100%'}} className={classes.reply_textfield} spellCheck autoCorrect="true" value={replyText}/>
        
        <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        alignSelf:'flex-end'
      }}>
        <IconButton onClick={submitReplyHandler} >
        <SendIcon sx={{fontSize:'35px', color:'#0CA4FA'}} />
        </IconButton>
        </Box>
        </Box>
    </Paper>
  );
};

export default Reply;
