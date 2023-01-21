import React, {useState, useContext, useEffect} from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid, styled } from "@mui/material";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack/Stack";
import Button from "@mui/material/Button";
import { FetchContext } from "../contexts/PrivateFetchContext";
import { AuthContext } from "../contexts/AuthContext";

// import EditUserProfile from "../Subpages/EditUserProfile";

import userImage from "../assets/salat.png";

import classes from "./styles/UserProfile.module.css";
import { NavLink, Outlet } from "react-router-dom";
import EditUserProfile from "../Subpages/EditUserProfile";
import AvatarUpload from "../components/AvatarUpload";
import { publicFetch } from "../utils/fetch";
import { useUserProfile } from "../services/protected/useUserProfile.api";

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

interface PrivateInfo{
  
  fullname:string | null,
  username:string | null,
  profilepic:string | null,
}

interface userInfo{
  username:string,
  email:string,
  profilepic:string,
}

const UserProfile = () => {
  const fetchcontext = useContext(FetchContext);
  const {authState, updateAuthInfo} = useContext(AuthContext);
  const [openEditProfileDialoug, setOpenEditProfileDialog] = useState<boolean>(false);
  const [userData, setUserData] = useState<PrivateInfo>({fullname:'', username:'', profilepic:''});
  const [error, setError] = useState(null);

  const {getprofile} = useUserProfile();

  



  const editProfileDialogHandler=()=>{
    setOpenEditProfileDialog(!openEditProfileDialoug);
  }
  const user= localStorage.getItem("userInfo");

  const userInfo:userInfo =user ? JSON.parse(user) : '';


  // const {userProfileInfo} = fetchcontext;

  // const {fullname} = userProfileInfo;


  
  useEffect(()=>{
    console.log('fetching data.....')
    const userProfileData = async()=>{
      try{
        const {data}:any = await publicFetch.get('/myprofile');

        const userinfo = {
          username:data.username,
          email:data.email,
          profilepic:data.profilepic,
          fullname:data.fullname,
          birthdate:data.birthdate,
        }

        updateAuthInfo(userinfo);

        // fetchcontext.setUserProfileInfo(data,userinfo);
        console.log(data);
      }catch(e){
        console.log(e);
      }
    }
    userProfileData();
  },[]);





  return (
    <>
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
                {authState.userInfo.fullname ? authState.userInfo.fullname :authState.userInfo.username}
              </Typography>
              <Typography
                variant="subtitle1"
                color="#757a95"
                sx={{ fontSize: { xs: "16px", md: "14px" } }}
              >
                @{authState.userInfo.username}
              </Typography>

              <Button
                size="small"
                color="success"
                variant="contained"
                sx={{ marginTop: 1 }}
                onClick={editProfileDialogHandler}
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
      <EditUserProfile close={editProfileDialogHandler} open={openEditProfileDialoug}/>
    </Box>
    
    </>
  );
};

export default UserProfile;
