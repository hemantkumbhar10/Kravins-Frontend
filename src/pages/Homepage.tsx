import { useEffect, useContext, useState } from "react";
import NavBar from "./NavBar";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Outlet } from "react-router-dom";

import classes from "./styles/HomePage.module.css";
import Chat from "../components/Chats/Chat";
import Notifications from "../components/Notifications";

import { viewportContext } from "../contexts/ViewportProvider";
import ChatHome from "../components/Chats/ChatHome";

const Homepage = () => {
  const { width } = useContext(viewportContext);

  if (!width) {
    return <></>;
  }

  const rightbarbreakpoint = 900;

  const rightNav = (
    <Box
      sx={{
        mt: 10,
        width: { lg: "30%", md: "40%", xs: "100%" },
        display: "flex",
        overflowY: "auto",
        overflowX: "hidden",
        flexDirection: "column",
        scrollBehavior: "smooth",
        pb: 5,
      }}
      className={classes.right_nav_container}
    >
      <Box>
        <Notifications />
        <ChatHome />
      </Box>
    </Box>
  );

  const rightNavbar = width > rightbarbreakpoint && rightNav;

  return (
    <Box
      position="relative"
      sx={{
        overflow: "hidden",
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        maxWidth: { lg: "1140px", md: "900px", xs: "100%" },
        m: "auto",
      }}
    >
      <NavBar />
      <Box
        className={classes.cards}
        sx={{
          height: "100%",
          width:{xs:'100%',lg:'unset'},
          mt: "7vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </Box>
      {rightNavbar}
    </Box>
  );
};

export default Homepage;
