import * as createPalette from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    blue?: PaletteColorOptions;
    white?: PaletteColorOptions;
    link?: PaletteColorOptions;
    lightOrange?: PaletteColorOptions;
    darkOrange?: PaletteColorOptions;
    fontColor?: PaletteColorOptions;
    disabled?: PaletteColorOptions;
    titleColor?: PaletteColorOptions;
    
  }
  interface Palette {
    blue: PaletteColor;
    white: PaletteColor;
    link: PaletteColor;
    lightOrange: PaletteColor;
    darkOrange: PaletteColor;
    fontColor: PaletteColor;
    disabled: PaletteColor;
    titleColor: PaletteColor;
  }
}

declare module "@mui/material" {
  interface ButtonPropsColorOverrides {
    blue: true;
    white: true;
    link: true;
    lightOrange: true;
    darkOrange: true;
    fontColor: true;
    disabled: true;
    titleColor: true;
  }
  interface IconButtonPropsColorOverrides{
    blue:true;
    white:true;
    link:true;
    lightOrange: true;
    darkOrange: true;
    fontColor: true;
    disabled: true;
    titleColor: true;
  }
  interface TextFieldPropsColorOverrides {
    blue: true;
    white: true;
    link: true;
    lightOrange: true;
    darkOrange: true;
    fontColor: true;
    disabled: true;
    titleColor: true;
  }
  interface SvgIconPropsColorOverrides {
    blue: true;
    white: true;
    link: true;
    lightOrange: true;
    darkOrange: true;
    fontColor: true;
    disabled: true;
    titleColor: true;
  }
}



