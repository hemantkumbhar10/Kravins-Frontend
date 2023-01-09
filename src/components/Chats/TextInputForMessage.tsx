import React from 'react'
import {TextField} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import {IconButton} from '@mui/material';

import { StandardTextFieldProps } from '@mui/material';



const wrapForm = {
        display: "flex",
        justifyContent: "center",
        alignItems:'center',
        width: "100%",
        margin: `auto`,
    }


 const TextInput = () => {
    return (
        <>
            <form style={wrapForm}  noValidate autoComplete="off">
            <TextField
    
                id="standard-text"
                variant='standard'
                label="Message"
                sx={{width:'100%',boxShadow:'none',mx:1,mb:1,mt:1, borderBottom:'0px' ,'& .css-1iv5koc-MuiInputBase-root-MuiInput-root:after':{display:'none'},
                '& .css-1iv5koc-MuiInputBase-root-MuiInput-root:before':{display:'none'},
                backgroundColor:'#f0f0f0',
                '& .css-13rgreq-MuiFormLabel-root-MuiInputLabel-root':{pl:2,marginTop:-1 },
                '& .Mui-focused':{pl:2 },

            }}
                multiline
                maxRows={2}
                //margin="normal"
            />
            <IconButton aria-label='send' >
                <SendIcon color='primary'/>
            </IconButton>
            </form>
        </>
    )
}

export default TextInput;