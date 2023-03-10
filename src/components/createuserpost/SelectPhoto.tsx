import { Box, Typography, Button, } from "@mui/material"
import foodCameraIcon from '../../assets/foodPhotoIcon.svg';
import React from "react";


interface EditorProps{
    setImage:(img:string)=>void;
}


const SelectPhoto=({setImage,}:EditorProps)=>{

    const onInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if(!e.currentTarget.files) return;
        setImage(URL.createObjectURL(e.currentTarget.files[0]));
    }


    return(
        <Box sx={{width:'100%', height:'100%', display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center', }}>
            <img src={foodCameraIcon} style={{width:'100px', height:'100px', marginLeft:-12}} alt="Upload your food clicks icon" />
            <Typography variant='h6' color='primary' my={2} >Here goes your yummy clicks!</Typography>
            <Button variant='contained' color='blue' component='label' sx={{mt:1}}>Select photo
                <input hidden accept='image/*' type="file" onChange={onInput}/>
            </Button>
        </Box>
    )
}

export default SelectPhoto;