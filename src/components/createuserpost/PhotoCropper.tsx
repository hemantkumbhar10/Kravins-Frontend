
import { Box } from "@mui/material";

interface CropperProps {
  imgsrc: string;
  isImageSelected:boolean
}

const PhotoCropper = ({ imgsrc,isImageSelected }: CropperProps) => {

  const margin_left = isImageSelected ? 0 : 1000;
  const display_prop = isImageSelected ? 'inline' : 'none';

  return (
    <> 
    <Box sx={{width:'100%', height:'100%', ml:margin_left,display:display_prop, }} >
      <img src={imgsrc} alt="Yummy food post" />
    </Box>
    </>
  );
};

export default PhotoCropper;
