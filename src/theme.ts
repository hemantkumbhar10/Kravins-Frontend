import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF4B3A",
    },
    secondary: {
      main: "#000000",
    },
    info: {
      main: "#CFCFCF",
    },
    blue: {
      main: "#23d2e2",
    },
    white:{
      main:'#ffffff',
    },
    link:{
      main:'#0CA4FA',
    },
    lightOrange:{
      main:'#d17a72',
    },
    darkOrange:{
      main:'#ff1500',
    },
    fontColor:{
      main:'#959ab5'
    },
    disabled:{
      main:'#b3b1c5'
    },
    titleColor:{
      main:"#515365"
    }
  },
  typography: {
    fontFamily: ["Port Lligat Sans", "sans-serif"].join(","),
  },
});

export default theme;
