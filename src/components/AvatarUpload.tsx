import React, { useRef, useState } from "react";
import { TransitionProps } from "@mui/material/transitions";
import Slide from "@mui/material/Slide";
import AvatarEditor from "react-avatar-editor";
import userImage from "../assets/jhondoe.png";
import classes from "./styles/AvatarUpload.module.css";
import CropRotateIcon from "@mui/icons-material/CropRotate";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

import {
  Box,
  Button,
  Dialog,
  Slider,
  SliderValueLabelProps,
  Stack,
  Tooltip,
  Typography,
  styled,
  IconButton,
} from "@mui/material";
import { dataUrlToFile } from "../helpers/urlToFile";

interface AvatarUploadProps {
  close: () => void;
  open: boolean;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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

const AvatarUpload = ({ close, open }: AvatarUploadProps) =>{
  const [image, setImage] = useState<string>(userImage);
  const editorRef = useRef<AvatarEditor>(null);
  const [imageURL, setImageURL] = useState<string | ArrayBuffer | null>(null);
  const [scale, setScale] = useState<number>(1);
  const [rotate, setRotate] = useState<number>(0);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.currentTarget.files) return;
    setImage(URL.createObjectURL(event.currentTarget.files[0]));
  };

  const handleZoomIn = (event: Event, newValue: number | number[]) => {
    setScale(newValue as number);
  };

  const handleRotateRight = () => {
    setRotate(rotate + 90);
  };

  const onClickSave =() => {
    if (editorRef.current) {
      const canvasref = editorRef.current.getImage();
      const canvasurl = editorRef.current.getImage().toDataURL()
      canvasref.style.touchAction='none';

      const file = dataUrlToFile(canvasurl, 'userAvatar.png');

      console.log('herees the file: ',file);
    //  fetch(canvas)
    //     .then(res => res.blob())
    //     .then(blob => setImageURL((prev)=>{
    //       return window.URL.createObjectURL(blob);
    //     }));
    // }
  }
}

  // const onClickSave = () => {
  //   if (editorRef.current) {
  //     const canvas = editorRef.current.getImage();
  //     if (canvas.toBlob) {
  //       canvas.toBlob((blob: Blob | null) => {
  //         if (blob) {
  //           setImageURL(window.URL.createObjectURL(blob));
  //         }
  //       }, "image/jpeg");
  //     } else {
  //       const dataURL = canvas.toDataURL();
  //       fetch(dataURL)
  //         .then((res) => res.blob())
  //         .then((blob) => {
  //           const fileReader = new FileReader();
  //           fileReader.onload = () => {
  //             setImageURL(fileReader.result);
  //           };
  //           fileReader.readAsDataURL(blob);
  //         });
  //     }
  //   }
  // };

  // console.log(imageURL);

  return (
    <Dialog
      TransitionComponent={Transition}
      open={open}
      aria-label="Profile picture upload"
      sx={{ zIndex: 999999 }}
    >
      <Box
        sx={{
          width: "auto",
          p: 2,
          height: "auto",
          m: "auto",
          "& MuiBox-root css-ztrqht": {
            canvas: { width: { xs: 350, sm: 500 }, touchAction: "none" },
          },
        }}
      >
        <AvatarEditor
          className={classes.avatar_editor}
          image={image}
          ref={editorRef}
          width={200}
          height={200}
          border={50}
          color={[255, 255, 255, 0.6]} // RGBA
          scale={scale}
          rotate={rotate}
          borderRadius={200}
        />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="outlined"
            component="label"
            color="blue"
            sx={{ boxShadow: "none" }}
          >
            Select Image
            <input
              accept="image/*"
              type="file"
              onChange={handleInput}
              style={{ display: "none" }}
            />
            <CameraAltIcon sx={{ ml: 1 }} />
          </Button>
          <Tooltip placement="top" title="rotate">
            <IconButton
              color="primary"
              aria-label="rotate picture"
              onClick={handleRotateRight}
            >
              <CropRotateIcon
                sx={{
                  transform: `rotate(-${rotate}deg)`,
                  transition: "10ms ease all",
                }}
              />
            </IconButton>
          </Tooltip>
        </Box>

        <Box sx={{ width: "95%", m: "auto" }}>
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
        <Stack flexDirection="row" gap={1}>
          <Button onClick={close} color="blue" variant="contained">
            Cancle
          </Button>
          <Button onClick={onClickSave} color="primary" variant="contained">
            Upload
          </Button>
        </Stack>
      </Box>
    </Dialog>
  );
}


export default AvatarUpload;
