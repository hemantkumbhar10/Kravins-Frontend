import React,{useContext} from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SmsIcon from "@mui/icons-material/Sms";

import { AuthContext } from "../../contexts/AuthContext";
import { NavLink } from "react-router-dom";

import classes from "./styles/BottomNav.module.css";
import CreatePostPage from "../../pages/CreatePostPage";

const MyNavLink = React.forwardRef<any, any>((props, ref) => (
  <NavLink
    ref={ref}
    to={props.to}
    className={({ isActive }) =>
      `${props.className} ${isActive ? props.activeClassName : ""}`
    }
    end={props.endtrue === true ? true : false}
  >
    {props.children}
  </NavLink>
));

const BottomNav = () => {
  const [value, setValue] = React.useState("recents");
  const [openPostDialogue, setOpenPostDialogue] = React.useState(false);

  const {isAuthenticated} = useContext(AuthContext);



  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const postDialogueHandler = ()=>{
    setOpenPostDialogue(!openPostDialogue);
  }

  return (
    <>
      <BottomNavigation
        sx={{
          margin: "auto",
          height: "50px",
          width: "100%",
          position: 'fixed',
          bottom: 2,
          left: 0,
          borderRadius:20,
          backgroundColor: "#34465d",
          "& .Mui-selected": {
            color: "#ffffff",
            "& .MuiSvgIcon-root": { color: "#ffffff" },
          },
          zIndex:888888
        }}
        value={value}
        onChange={handleChange}
        className={classes.bottom_navigation_container}
      >
        <BottomNavigationAction
          label="Home"
          value="Home"
          icon={<HomeIcon color="info" />}
          component={MyNavLink}
          to=""
          activeClassName="Mui-selected"
          endtrue={true}
        />
        <BottomNavigationAction
          label="Kravins"
          value="Kravins"
          icon={<RamenDiningIcon color="info" />}
          component={MyNavLink}
          to="kravins"
          activeClassName="Mui-selected"
        />
        {isAuthenticated() && (
          <BottomNavigationAction
           
            value="Create Post"
            icon={
              <AddCircleOutlineIcon
              onClick={postDialogueHandler}
                color="info"
              />
            }
          />
        )}
        {isAuthenticated() && (
          <BottomNavigationAction
            label="Notifications"
            value="Notifications"
            icon={<NotificationsIcon color="info" 
            />}
            component={MyNavLink}
                to="notifications"
                activeClassName="Mui-selected"
          />
        )}
        {isAuthenticated() && (
          <BottomNavigationAction
            label="Chat"
            value="Chat"
            icon={<SmsIcon color="info" />}
            component={MyNavLink}
                to="chats"
                activeClassName="Mui-selected"
          />
        )}
      </BottomNavigation>
      <CreatePostPage open={openPostDialogue} close={postDialogueHandler}/>
    </>
  );
};

export default BottomNav;
