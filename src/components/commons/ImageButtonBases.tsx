import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';







const ImageButton = styled(ButtonBase)(({ theme }) => ({
  m:'auto',
  borderRadius: "50%",
  zIndex: 1,
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  borderRadius:'50%',
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 110,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius:'50%',
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.18,
  borderRadius:'50%',
  transition: theme.transitions.create('opacity'),
}));


type Imageprops = {
  url:string,
  title:string,
  click:()=>void
}

export default function ImageButtonBases({url,title,click}:Imageprops) {



  return (
        <ImageButton
          focusRipple
          sx={{
            height: { xs: 80, md: 100 },
            width: { xs: 80, md: 100 },
          }}
          onClick={click}
        >
          <ImageSrc style={{ backgroundImage: `url(${url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              variant="subtitle1"
              color="primary"
            >
              {title}
            </Typography>
          </Image>
        </ImageButton>
  );
}