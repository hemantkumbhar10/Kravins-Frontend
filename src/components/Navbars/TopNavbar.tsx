import React,{useState,useContext} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { signout, posts } from "../../services/Auth/Sessions.api";
import { redirect } from "react-router-dom";



import darklogo from "../../assets/DarkLogo.png";
import BottomNav from "./BottomNav";

import { viewportContext } from "../../contexts/ViewportProvider";
import { LeftNav } from "./LeftNav";

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";


// import { useAuth } from "../../hooks/useAuth"
// import useAuth from "../../hooks/useUser";




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








const TopNavBar = () => {

  const {isAuthenticated, logout} = useContext(AuthContext);


  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [logoutError, setLogoutError] = useState<string | undefined>('');

  const { width } = React.useContext(viewportContext);

  const breakpoint = 900;
  const mobilebottomnavbreakpoint = 900;
  if (!width) {
    return <></>;
  }

  const menu = width < breakpoint && <LeftNav />;
  const bottomnav = width < mobilebottomnavbreakpoint && <Box width="350">
  <BottomNav />
</Box>;

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const showUser = async()=>{
    try{
      const {data}:any = await signout();
      logout();
      console.log("LOGOUT DAtA: ",data);
      redirect('/home');
    }catch(err:any){
      const {data} = err.response;
      setLogoutError(err.message);
      console.log(err);
    }
  }

  return (
    <AppBar position="fixed" sx={{ height: "50px", backgroundColor:'#34465d' }}>
      <Container
        maxWidth="xl"
        sx={{
          height: "50px",
          display: "flex",
          alignItems: "center",
          width: { sm: "100%", md: "83%" },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex"
            alignItems="center"
          >
            <IconButton sx={{ backgroundColor: "#ffffff" }} component={Link} to=''>
              <Avatar
                alt="Kravin logo"
                src={darklogo}
                sx={{ width: 30, height: 30 }}
              />
            </IconButton>
            {isAuthenticated() ? menu : ''}
          </Box>
          {/* Bottomnav///////////////////////////////////////////////////////////////////////////////////////// */}
         {bottomnav}
          {/* Bottomnav///////////////////////////////////////////////////////////////////////////////////////// */}

          <Box sx={{ flexGrow: 0 }}>
              {isAuthenticated() && <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/2.jpg"
                    sx={{ width: 46, height: 46 }}
                  />
                </IconButton>
              </Tooltip>}
            {!isAuthenticated() && (
              <Button
                size="small"
                color="success"
                variant="contained"
                component={Link}
                to="/auth"
              >
                Login
              </Button>
            )}
            {isAuthenticated() && 
            <Menu
              sx={{ mt: "45px", zIndex:888888 }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key="Profile" onClick={handleCloseUserMenu} component={Link} to='myprofile'>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
              <MenuItem key="Edit Account" onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Edit Account</Typography>
              </MenuItem>
              <MenuItem key="Review App" onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Review App</Typography>
              </MenuItem>
              <MenuItem
                key="Logout"
                onClick={showUser}
                component={Link}
                to="/home"
              >
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopNavBar;
