import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import SignpostSharpIcon from "@mui/icons-material/SignpostSharp";
import PeopleAltSharpIcon from "@mui/icons-material/PeopleAltSharp";
import Diversity2SharpIcon from "@mui/icons-material/Diversity2Sharp";
import HomeIcon from "@mui/icons-material/Home";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SmsIcon from "@mui/icons-material/Sms";






import { NavLink } from "react-router-dom";
import CreateGroup from "../../Subpages/CreateGroup";
import CreatePostPage from "../../pages/CreatePostPage";



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





const DeskLeftNav = () =>{
  const [openPostDialogue, setOpenPostDialogue] = React.useState(false);
  const [openGroupDialogue, setOpenGroupDialogue] = React.useState(false);


  const groupDialogueHandler=()=>{
    setOpenGroupDialogue(!openGroupDialogue);
  }

  const postDialogueHandler = ()=>{
    setOpenPostDialogue(!openPostDialogue);
  }

  


  return(
  <div
  >
    <Toolbar />
    <Divider />
    <List>
      <ListItem key="Home" disablePadding>
        <ListItemButton  component={NavLink} to=''>
          <ListItemIcon sx={{ color: "#ff4b3a" }}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" sx={{ color: "#ff4b3a" }} />
        </ListItemButton>
      </ListItem>
      <ListItem key="Kravins" disablePadding>
        <ListItemButton component={NavLink} to='kravins'>
          <ListItemIcon sx={{ color: "#ff4b3a" }}>
            <RamenDiningIcon />
          </ListItemIcon>
          <ListItemText primary="Kravins" sx={{ color: "#ff4b3a" }} />
        </ListItemButton>
      </ListItem>
      <ListItem key="My Posts" disablePadding>
        <ListItemButton component={NavLink} to='myprofile/myposts'>
          <ListItemIcon sx={{ color: "#ff4b3a" }}>
            <SignpostSharpIcon />
          </ListItemIcon>
          <ListItemText primary="My Posts" sx={{ color: "#ff4b3a" }} />
        </ListItemButton>
      </ListItem>
    </List>
    <Divider />
    <List>
      <ListItem key="Create Post" disablePadding>
        <ListItemButton onClick={postDialogueHandler}>
          <ListItemIcon>
            <AddCircleOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Create Post" />
        </ListItemButton>
      </ListItem>
      <ListItem key="Create Group" disablePadding>
        <ListItemButton onClick={groupDialogueHandler} >
          <ListItemIcon>
            <Diversity2SharpIcon />
          </ListItemIcon>
          <ListItemText primary="Create Group" />
        </ListItemButton>
      </ListItem>
    </List>
    <CreatePostPage open={openPostDialogue} close={postDialogueHandler}/>
    <CreateGroup open={openGroupDialogue} close={groupDialogueHandler}/>
  </div>)
  }


export default DeskLeftNav;