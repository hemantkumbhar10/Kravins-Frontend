import React, { useState, useCallback } from "react";
import {Button, Stack, IconButton} from "@mui/material";
import Cropper from "react-easy-crop";
import { Point, Area } from "react-easy-crop/types";

import CloseIcon from '@mui/icons-material/Close';

import { getCroppedImg } from "../helpers/canvasUtils";

// interface HTMLInputEvent extends HTMLInputElement{

// }

interface Cprops{
    imageSrc:string | null
    getCroppedImageToUpload:(img:string)=>void
    hideCropperClose:Function
}



// const cropper:HTMLElement | null = document.querySelector('.reactEasyCrop_CropArea');

// cropper!.style.zoom = '200%'



const CroppedImage = (props:Cprops) => {

    const {imageSrc, getCroppedImageToUpload,hideCropperClose} = props;
    
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);  


  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
        setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage : any = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
      )
    //   console.log('donee', { croppedImage })
      getCroppedImageToUpload(croppedImage);
    //   hideCropperClose();
    } catch (e) {
      console.error(e)
    }
  }, [imageSrc, croppedAreaPixels])


  const closeCropper = ()=>{
    hideCropperClose();
  }



//   const showCroppedImage = useCallback(async () => {
//     try {
//       const croppedImage = await getCroppedImg(
//         imageSrc,
//         croppedAreaPixels,
//         rotation
//       )
//       console.log('donee', { croppedImage })
//       setCroppedImage(croppedImage)
//     } catch (e) {
//       console.error(e)
//     }
//   }, [imageSrc, croppedAreaPixels, rotation])

//   const onClose = useCallback(() => {
//     setCroppedImage(null)
//   }, [])





  return (
    <div className="CroppedImage" style={{position:'relative', height:'300px', backgroundColor:'info'}}>
      <div className="crop-container" >
        <Cropper
              image={imageSrc ? imageSrc : ''}
              crop={crop}
              zoom={zoom}
              aspect={5/2}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
      </div>
      <Stack flexDirection='row' justifyContent='flex-end' alignItems='flex-end' height='100%'>
      <Button
              onClick={showCroppedImage}
              variant="contained"
              color="link"
              size="small"
            >
              Crop
      </Button>
      <IconButton
              onClick={closeCropper}
              color="secondary"
              size="small"
            >
              <CloseIcon/>
      </IconButton>
      </Stack>
</div>
  );
};

export default CroppedImage;



{/* <Slider
          value={zoom}
          min={1}
          max={3}
          step={0.1}
          aria-labelledby="Zoom"
          onChange={(e, zoom) => setZoom(Number(zoom))}
          classes={{ root: "slider" }}
        /> */}