import * as React from "react";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import { Grid, styled } from "@mui/material";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack/Stack";
import Button from "@mui/material/Button";

// import EditUserProfile from "../Subpages/EditUserProfile";

import userImage from "../assets/salat.png";

import classes from "./styles/UserProfile.module.css";
import UsersPosts from "../components/UserProfile/UsersPosts";
import FriendList from "../components/UserProfile/FriendList";
import GroupList from '../components/UserProfile/GroupList';
import { NavLink, Outlet } from "react-router-dom";

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

const ImageStyled = styled("img")({
  borderRadius: "50%",
  zIndex: 1,
});

const UserProfile = () => {
  return (
    <Box sx={{maxHeight:'100%',  pt:{md:7,xs:0},m:'auto', mx:0,width:'100%',}} >
      <Paper
        sx={{ width: { xs: "100%", md: "95%" },
          height: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          py:2,
          margin: "auto",
          boxShadow: "none",
          border: "1px solid #ede9e9",
        }}
      >
        <Grid container ml={2}>
          <Grid item xs={12} sm={6} md={6} display="flex" flexDirection="row">
            <ImageStyled
              src={userImage}
              alt="user"
              sx={{
                mt: -1,
                height: { xs: 70, md: 70 },
                width: { xs: 70, md: 70 },
              }}
            />
            <Box ml={2}>
              <Typography
                sx={{ fontSize: { xs: "16px", md: "20px" }, color: "#333" }}
              >
                Jhon Doe
              </Typography>
              <Typography
                textAlign="center"
                variant="subtitle1"
                color="#757a95"
                sx={{ fontSize: { xs: "16px", md: "14px" } }}
              >
                @hamncheese69
              </Typography>

              <Button
                size="small"
                color="success"
                variant="contained"
                sx={{ marginTop: 1 }}
              >
                Edit Profile
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} m='auto'>
              <Grid container>
                <Grid item container spacing={2} sx={{display:'flex', justifyContent:{xs:'center',sm:'flex-end'}}} xs={4} sm={12} >
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant="subtitle1"
                      color="#757a95"
                      sx={{
                        fontSize: { xs: "16px", md: "14px" },
                        textAlign: { xs: "center", sm: "end" },
                      }}
                    >
                      Friends
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} display={{xs:'flex',md:'unset'}} justifyContent={{xs:'center',md:'unset'}}> 
                    <Typography
                      display="inline"
                      sx={{ fontSize: { xs: "18px", md: "15px" } }}
                      color="#fa6342"
                      
                    >
                      1234
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container spacing={2} sx={{display:'flex', justifyContent:{xs:'center',sm:'flex-end'}}} xs={4} sm={12}>
                  <Grid item xs={12} sm={6} >
                    <Typography
                      variant="subtitle1"
                      color="#757a95"
                      sx={{
                        fontSize: { xs: "16px", md: "14px" },
                        textAlign: { xs: "center", sm: "end" },
                      }}
                    >
                      Posts
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} display={{xs:'flex',md:'unset'}} justifyContent={{xs:'center',md:'unset'}}>
                    <Typography
                      display="inline"
                      sx={{ fontSize: { xs: "18px", md: "15px" } }}
                      color="#fa6342"
                    >
                      14
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container spacing={2} sx={{display:'flex', justifyContent:{xs:'center',sm:'flex-end'}}} xs={4} sm={12}>
                  <Grid item xs={12} sm={6}><Typography
                variant="subtitle1"
                color="#757a95"
                sx={{
                  fontSize: { xs: "16px", md: "14px" },
                  textAlign: { xs: "center", sm: "end" },
                }}
              >
                Groups</Typography></Grid>
                  <Grid item xs={12} sm={6} display={{xs:'flex',md:'unset'}} justifyContent={{xs:'center',md:'unset'}}><Typography
                  display="inline"
                  sx={{ fontSize: { xs: "18px", md: "15px" } }}
                  color="#fa6342"
                >
                  4
                </Typography></Grid>
                </Grid>
              </Grid>
          </Grid>
        </Grid>
        <Stack
          width="100%"
          m="auto"
          direction="row"
          justifyContent="center"
          spacing={1}
          mt={4}
          mb={0}
        >
          <Typography
            color='#515365'
            sx={{
              ":hover": {
                color: "#fa6342",
                cursor: "pointer",
                height:20,
                borderBottom: "1px solid #fa6342",
              },
              textDecoration:'none'
            }}
            component={MyNavLink}
          to=""
          activeClassName={classes.active_tab}
          end
          >
            Friends
          </Typography>
          <Typography
          color='#515365'
            sx={{
              ":hover": {
                color: "#fa6342",
                cursor: "pointer",
                height:20,
                borderBottom: "1px solid #fa6342",
              },
              textDecoration:'none'
            }}
            component={MyNavLink}
          to="mygroups"
          activeClassName={classes.active_tab}
          
          >
            Groups
          </Typography>
          <Typography
          color='#515365'
            sx={{
              ":hover": {
                color: "#fa6342",
                cursor: "pointer",
                height:20,
                borderBottom: "1px solid #fa6342",
              },
              textDecoration:'none'
            }}
            component={MyNavLink}
          to="myposts"
          activeClassName={classes.active_tab}
          >
            Posts
          </Typography>
        </Stack>
      </Paper>
      <Container sx={{height:'100%',overflowY:'auto',overflowX:'hidden', m:'auto'}} className={classes.posts_disable_scrollbar}>
        <Box
        pt={2}
        >
          <Outlet/>
          <Box sx={{height:{xs:'450px',sm:'300px'}}}></Box>
        </Box>
      </Container>
    </Box>
  );
};

export default UserProfile;
