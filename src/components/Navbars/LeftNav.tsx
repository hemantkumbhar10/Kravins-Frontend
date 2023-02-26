import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import SignpostSharpIcon from "@mui/icons-material/SignpostSharp";
import Diversity2SharpIcon from "@mui/icons-material/Diversity2Sharp";
import { Link } from "react-router-dom";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

import { NavLink } from "react-router-dom";
import CreateGroup from "../../Subpages/CreateGroup";

const MyNavLink = React.forwardRef<any, any>((props, ref) => (
  <NavLink
    ref={ref}
    to={props.to}
    className={({ isActive }) =>
      `${props.className} ${isActive ? props.activeClassName : ""}`
    }
    end
  >
    {props.children}
  </NavLink>
));

const drawerWidth = 240;

const LeftNav = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openGroupDialogue, setOpenGroupDialogue] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window.document.body : undefined;


  const groupDialogueHandler=()=>{
    setOpenGroupDialogue(!openGroupDialogue);
    if(mobileOpen){
      setMobileOpen(false);
    }
  }

  const searchHandler = ()=>{
    if(mobileOpen){
      setMobileOpen(false);
    }
  }

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ padding: 0, display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Box
          component="nav"
          sx={{
            width: { lg: drawerWidth },
            flexShrink: { lg: 0 },
            "& .css-12i7wg6-MuiPaper-root-MuiDrawer-paper": {
              marginTop: "100px",
              height: "auto",
              width: "600px",
            },
          }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", lg: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: "#fff none repeat scroll 0 0",
                boxShadow: "0 10px 20px rgb(0 0 0 / 30%)",
              },
              zIndex: 888888,
            }}
          >
            <div>
              <Toolbar />
              <Divider />
              <List>
                <ListItem key="My Posts" disablePadding onClick={handleDrawerToggle}>
                  <ListItemButton component={MyNavLink} to='myprofile/myposts' >
                    <ListItemIcon sx={{ color: "#ff4b3a" }}>
                      <SignpostSharpIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="My Posts"
                      sx={{ color: "#ff4b3a" }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem key="Create Group" disablePadding>
                  <ListItemButton onClick={groupDialogueHandler}>
                    <ListItemIcon sx={{ color: "#ff4b3a" }}>
                      <Diversity2SharpIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Create Group"
                      sx={{ color: "#ff4b3a" }}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem key="Search friends & groups" disablePadding>
                  <ListItemButton component={Link} to='searchfriends&groups' onClick={searchHandler}>
                    <ListItemIcon sx={{ color: "#ff4b3a" }}>
                      <PersonSearchIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Search Friends & Groups"
                      sx={{ color: "#ff4b3a" }}
                    />
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />
            </div>
          </Drawer>
        </Box>
      </Box>
      <CreateGroup open={openGroupDialogue} close={groupDialogueHandler}/>
    </>
  );
};

export { LeftNav };
