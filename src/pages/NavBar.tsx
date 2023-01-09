import React from "react";
import TopNavBar from "../components/Navbars/TopNavbar";
import { Box } from "@mui/material";

import { viewportContext } from "../contexts/ViewportProvider";

import { useAuth } from "../hooks/useAuth";

import classes from './styles/NavBar.module.css';
import DeskLeftNav from "../components/Navbars/DeskLeftNav";


const NavBar = () => {
  const { width } = React.useContext(viewportContext);

  const { authed } = useAuth();

  const breakpoint = 900;
  
  if (!width) {
    return <></>;
  }

  const navmenuleft = (
    <Box
      className={classes.navbarbreakpoint}
      sx={{
        mt: 10,
        height: "70vh",
        width: {xl:'250px', lg: "200px", md: "200px" },
        background:'#fff none repeat scroll 0 0',
        border:'1px solid #ede9e9',
        borderRadius:2,
        // backgroundColor: "#FBAB7E",
        // backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
      }}
    >
      <DeskLeftNav/>
    </Box>
  );

  const leftMenuDesktop = width > breakpoint && navmenuleft;

  return (
    <>
      <Box sx={{ position: "fixed", width: "100%", zIndex: 9999 }}>
        <TopNavBar />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {authed && leftMenuDesktop}
      </Box>
    </>
  );
};

export default NavBar;
