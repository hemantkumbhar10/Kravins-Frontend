import React, { useState, useRef, useCallback } from "react";

import {
  Box,
  IconButton,
  Tooltip,
  Typography,
  styled,
  Slider,
  Stack,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import classes from "./styles/PhotoCropper.module.css";
import Cropper from "react-easy-crop";
import getCroppedImg from "../../helpers/CropImage";
import Button from "@mui/material/Button";

interface CropperProps {
  imgsrc: string;
  goBacktToSelectImage: () => void;
  getCroppedImage:(img:string|null)=>void
}

const ImageActionSlider = styled(Slider)({
  color: "#52af77",
  height: 3,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 15,
    width: 15,
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
    lineHeight: 0.5,
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

const PhotoCropper = ({ imgsrc, goBacktToSelectImage,getCroppedImage }: CropperProps) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<any>(0.5);
  const [rotation, setRotation] = useState<any>(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [aspect, setAspect] = useState(5/3);

  const onCropComplete = useCallback(
    (croppedArea: any, croppedAreaPixels: any) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const imcreaseAspect = ()=>{
    setAspect(5/7);
  }
  const decreaseAspect = ()=>{
    setAspect(5/3);
  }

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage: string | null = await getCroppedImg(
        imgsrc,
        croppedAreaPixels,
        rotation
      );
      console.log("cropped Image", { croppedImage });
      setCroppedImage(croppedImage);
      getCroppedImage(croppedImage);
    } catch (error) {
      console.log("error occurred while getting cropped  image..", error);
    }
  }, [croppedAreaPixels, rotation, imgsrc]);

  const onClose = useCallback(() => {
    setCroppedImage(null);
  }, []);

  const backToSelectorHandler = () => {
    goBacktToSelectImage();
  };

  const icon_button_for_goback = (
    <IconButton
      color="primary"
      aria-label="Back to image select"
      component="label"
      onClick={backToSelectorHandler}
      sx={{ position: "absolute", top: 0, left: 0, zIndex:1 }}
    >
      <KeyboardBackspaceIcon />
    </IconButton>
  );

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems:"flex-start",
          pt: 10,
          px: 3,
        }}
      >
        {icon_button_for_goback}
        <Cropper
        style={{containerStyle:{width:'90%', height:'70%', margin:'auto',marginTop:44}}}
          image={imgsrc}
          crop={crop}
          rotation={rotation}
          zoom={zoom}
          aspect={aspect}
          onCropChange={setCrop}
          onRotationChange={setRotation}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
        <Box sx={{width:'100%', m: "auto", position:'relative', mb:4 }}>
          <Stack direction='row' gap={3}> 
          <Stack direction='column' width='100%'>
          <Typography gutterBottom pb={0} mb={-1}>
            Zoom
          </Typography>
          <ImageActionSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            min={0.5}
            step={0.05}
            value={zoom}
            onChange={(e, zoom)=>setZoom(zoom)}
            max={10}
          />
</Stack>
<Stack direction='column' width='100%'>
           <Typography gutterBottom pb={0} mb={-1}>
            Rotate
          </Typography>
          <ImageActionSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            min={0}
            step={45}
            value={rotation}
            onChange={(e, rotation)=>setRotation(rotation)}
            max={360}
            />
            </Stack></Stack>
           <Stack direction='row' width='100%'>
            <Stack direction='row'>
              <IconButton color="primary" aria-label="Decrease crop size" component="label" onClick={decreaseAspect}>
                <ArrowLeftIcon fontSize="large"/>
              </IconButton>
              <Typography variant="subtitle2" textAlign='center' color='green' my='auto' >Change Crop Size</Typography>
              <IconButton color="primary" aria-label="Increase crop size" component="label" onClick={imcreaseAspect}>
                <ArrowRightIcon fontSize="large"/>
              </IconButton>
            </Stack>
            <Button variant="contained" sx={{height:30, m:'auto', mr:0}} color="blue" onClick={showCroppedImage}>Crop</Button>
            </Stack>
        </Box>
      </Box>
    </>
  );
};

export default PhotoCropper;

{
  /** 
<Box
sx={{
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  pt: 10,
  px: 3,
}}
>
{icon_button_for_goback}
// <Box sx={{ width: "auto", height: "auto" }}> 
//<AvatarEditor
    // className={classes.photo_cropper_editor}
  //  image={image}
    //color={[255, 255, 255, 0.6]}
   // width={450}
   // height={450}
   // scale={scale}
   // rotate={rotate}
 // ></AvatarEditor> 
<ReactCrop
  crop={crop}
  onChange={(_, percentCrop) => setCrop(percentCrop)}
  onComplete={(c) => setCompletedCrop(c)}
  aspect={aspect}
>
  <img src={image} ref={imgRef} alt="Crop me" style={{transform:`scale(${scale}) rotate(${rotate}deg)`}} onLoad={onImageLoad}/>
</ReactCrop>

//</Box> 
<Box sx={{ width: "150px", pt: 2, pl: 2 }}>
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
</Box>*/
}
