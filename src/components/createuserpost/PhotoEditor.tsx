import React, { useState,useRef  } from "react";

import { Box, Slide } from "@mui/material";
import SelectPhoto from "./SelectPhoto";
import PhotoCropper from "./PhotoCropper";


const PhotoEditor = () => {
  const [imgSrc, setImgSrc] = useState<string>("");
  const [isImageSelected, setIsImageSelected] = useState<boolean>(false);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const containerRef = useRef(null);

  const getImage = (img: string) => {
    setImgSrc(img);
    setIsImageSelected(true);
    console.log(img);
  };

  const goBacktToSelectImage = () => {
    setIsImageSelected(false);
    setImgSrc("");
  };

  const getCroppedImg = (img:string | null)=>{
    setCroppedImage(img);
    setIsImageSelected(false);
    setImgSrc("");
  }





  return (
    <Box sx={{display:'flex', alignItems:'center',flexDirection:'row', justifyContent:'center',maxWidth:'500px', height:'100%', overflow:'hidden', }} ref={containerRef} >
      <Slide direction="right" in={!isImageSelected} container={containerRef.current}  mountOnEnter unmountOnExit timeout={500}>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', width:'500px', height:'600px', overflow:'hidden'}} >
          <SelectPhoto setImage={getImage} />
        </Box>
      </Slide>
      <Slide direction="left" in={isImageSelected} container={containerRef.current} mountOnEnter unmountOnExit timeout={500}>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center',width:'500px', height:'600px' }}  >
          <PhotoCropper imgsrc={imgSrc} goBacktToSelectImage={goBacktToSelectImage} getCroppedImage={getCroppedImg}/>
        </Box>
      </Slide>
    </ Box>
  );
};

export default PhotoEditor;
