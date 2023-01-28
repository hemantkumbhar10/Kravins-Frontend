import React, { useState, useRef } from "react";

import { Box, IconButton, Tooltip, Typography, styled, Slider } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AvatarEditor from "react-avatar-editor";
import ReactCrop, {centerCrop, makeAspectCrop, Crop, PixelCrop} from 'react-image-crop';

import classes from "./styles/PhotoCropper.module.css";

interface CropperProps {
  imgsrc: string;
  goBacktToSelectImage: () => void;
}


const ImageActionSlider = styled(Slider)({
  color: "#52af77",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});



function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number,
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  )
}




const PhotoCropper = ({ imgsrc, goBacktToSelectImage }: CropperProps) => {
  const [image, setImage] = useState<string>(imgsrc);
  const imgRef = useRef<HTMLImageElement>(null)
  const [crop, setCrop] = useState<Crop>();
  const [scale, setScale] = useState<number>(1);
  const [rotate, setRotate] = useState<number>(0);
  const [aspect, setAspect] = useState<number | undefined>(16/9);

  const backToSelectorHandler = () => {
    goBacktToSelectImage();
  };

  const icon_button_for_goback = (
    <IconButton
      color="primary"
      aria-label="Back to image select"
      component="label"
      onClick={backToSelectorHandler}
      sx={{ position: "absolute", top: 0, left: 0 }}
    >
      <KeyboardBackspaceIcon />
    </IconButton>
  );

  const onSelectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files && event.currentTarget.files.length > 0) {
      setCrop(undefined);
      const reader = new FileReader();
      reader.addEventListener('load', ()=> setImage(reader.result?.toString() || ''),)
      reader.readAsDataURL(event.currentTarget.files[0]);
      // setImage(URL.createObjectURL(event.currentTarget.files[0]));
    }
  };


  const onImageLoad = (e:React.SyntheticEvent<HTMLImageElement>) => {
    if(aspect){
      const {width, height} = e.currentTarget;
      setCrop(centerAspectCrop(width,height,aspect))
    }
  }


  function handleToggleAspectClick(){
    if(aspect){
      setAspect(undefined);
    }else if(imgRef.current){
      const {width, height} = imgRef.current;
      setAspect(16/9);
      setCrop(centerAspectCrop(width, height, 16/9))
    }
  }



  const handleZoomIn = (event: Event, newValue: number | number[]) => {
    setScale(newValue as number);
  };

  const handleRotateRight = () => {
    setRotate(rotate + 90);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          pt:10,
          px:3
        }}
      >
        {icon_button_for_goback}
        {/* <Box sx={{ width: "auto", height: "auto" }}> */}
          <AvatarEditor
            // className={classes.photo_cropper_editor}
            image={image}
            color={[255, 255, 255, 0.6]}
            width={450}
            height={450}
            scale={scale}
            rotate={rotate}
          ></AvatarEditor>
          {/* <ReactCrop crop={}><img src={image}/></ReactCrop> */}
                   
        {/* </Box> */}
        <Box sx={{ width:'150px',pt:2,pl:2 }}>
          <Typography gutterBottom pb={0} mb={-1}>
            Zoom
          </Typography>
          <ImageActionSlider

            valueLabelDisplay="auto"
            aria-label="pretto slider"
            min={1}
            step={0.05}
            value={scale}
            onChange={handleZoomIn}
            max={10}
          />
        </Box>
      </Box>
    </>
  );
};

export default PhotoCropper;
