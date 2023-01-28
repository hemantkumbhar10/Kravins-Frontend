import React, {useState} from 'react';

import { Box } from '@mui/material';
import SelectPhoto from "./SelectPhoto";
import PhotoCropper from './PhotoCropper';

const PhotoEditor = () => {

    const [imgSrc, setImgSrc] = useState<string>('');
    const [isImageSelected, setIsImageSelected] =  useState<boolean>(false);


    const getImage = (img:string)=>{
        setImgSrc(img);
        setIsImageSelected(true);
        console.log(img);

    }

    const goBacktToSelectImage = ()=>{
        setImgSrc('');
        setIsImageSelected(false);
    }

  return (
    <>
    <Box sx={{display:'flex', flexDirection:'row'}}>
      <SelectPhoto  setImage={getImage} isImageSelected={isImageSelected}/>
      <PhotoCropper imgsrc={imgSrc} isImageSelected={isImageSelected}/>
    </Box>
    </>
  );
};

export default PhotoEditor;
