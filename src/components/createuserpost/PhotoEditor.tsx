import React, { useState,useRef,useEffect  } from "react";

import { Box, Slide } from "@mui/material";
import SelectPhoto from "./SelectPhoto";
import PhotoCropper from "./PhotoCropper";
import Collapse from '@mui/material/Collapse';


const PhotoEditor = () => {
  const [imgSrc, setImgSrc] = useState<string>("");
  const [isImageSelected, setIsImageSelected] = useState<boolean>(false);
  const [nowSelected, setNowSelected] = useState<boolean>(true);

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

  const nowChangeTheSlidehandler = ()=>{
    setNowSelected(true);
  }



  return (
    <Box sx={{display:'flex', alignItems:'center',flexDirection:'row', justifyContent:'center',maxWidth:'700px', height:'100%', overflow:'hidden', }} ref={containerRef} >
      <Slide direction="right" in={!isImageSelected} container={containerRef.current}  mountOnEnter unmountOnExit timeout={500}>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', width:'500px', height:'600px', overflow:'hidden'}} >
          <SelectPhoto setImage={getImage} />
        </Box>
      </Slide>
      <Slide direction="left" in={isImageSelected} container={containerRef.current} mountOnEnter unmountOnExit timeout={500}>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center',width:'700px', height:'600px' }}  >
          <PhotoCropper imgsrc={imgSrc} goBacktToSelectImage={goBacktToSelectImage}/>
        </Box>
      </Slide>
      {/* <Collapse orientation="horizontal" in={isImageSelected}>
              <Box sx={{width:'200px'}}></Box>
      </Collapse> */}
     

    </ Box>
  );
};

export default PhotoEditor;
