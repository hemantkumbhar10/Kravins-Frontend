import React, { useContext } from "react";
import { ThemeProvider } from "@mui/material";
import classes from "./App.module.css";
import theme from "./theme";
import { ViewportProvider } from "./contexts/ViewportProvider";

import { AuthContext } from "./contexts/AuthContext";
import { AuthProvider } from "./hooks/useAuth";

import { Routes, Route, Outlet, Link } from "react-router-dom";


import Welcome from "./pages/Welcome";
import Auth from "./pages/Auth";
import Homepage from "./pages/Homepage";
import RecipePage from "./Subpages/RecipePage";
import Kravin from "./pages/Kravin";
import PostsPage from "./pages/PostsPage";
import CocktailsPage from "./pages/CocktailsPage";
import NutrientsPage from "./pages/NutrientsPage";
import FunzonePage from "./pages/FunzonePage";
import CreateGroup from "./Subpages/CreateGroup";
import GroupList from "./components/UserProfile/GroupList";
import CreatePostPage from "./pages/CreatePostPage";
import Notifications from "./components/Notifications";
import Chat from "./components/Chats/Chat";
import ChatHome from "./components/Chats/ChatHome";
import {viewportContext} from './contexts/ViewportProvider';
import UserProfile from "./pages/UserProfile";
import FriendList from "./components/UserProfile/FriendList";
import UsersPosts from "./components/UserProfile/UsersPosts";
import NoMatch from "./pages/NoMatch";
// import UserProfile from './pages/UserProfile';
// import GroupPage from './pages/GroupPage';
// import CreateGroup from './Subpages/CreateGroup';

/**
 *
 * TODAYS TASK FOR FRONTEND...
 *
 *
 * 1. ///////////////////REACT ROUTER DOM///////////////////
 *
 * 
 * Rearranging navs
 * 
 * 
 * For mobile and small tabs keeps tabs as it is
 * 
 * 
 * for desktop and large screens make separate navs
 * 
 * 
 * Left desktop nav
 *      Home
 *      Kravins
 *      Create Post dialogue box and remove route
 *      Create group dialogue box and remove route
 *      /////Bellow divider/////
 *          Notifications dialogue without backdrop
 *          Chats Dialogue without backdrop
 *
 *
 *
 *CHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEERS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 *
 */

function App() {

 const width = window.innerWidth;
 console.log(width)

  const desktop_breakpoint = 900;


  return (
    <ThemeProvider theme={theme}>
      <ViewportProvider>
        <AuthProvider>
          <div className={classes.app}>
            <Routes>
              <Route index element={<Welcome />} />
              <Route path="/" element={<Welcome />} />
              <Route path="home" element={<Homepage />}>
              {/* <Route path="mygroups" element={<GroupList />}/> */}
                {/* <Route path="creategroup" element={<CreateGroup/>}/> */}
                <Route index element={<PostsPage />} />
                <Route path="" element={<PostsPage />} />
                <Route path="kravins" element={<Kravin />} >
                  <Route index element={<RecipePage />} />
                  <Route path="" element={<RecipePage />} />
                  <Route path="cocktails" element={<CocktailsPage/>} />
                  <Route path="nutrients" element={<NutrientsPage/>} />
                  <Route path="kravinsextra" element={<FunzonePage/>} />
                </Route>
                <Route path="myprofile" element={<UserProfile/>}>
                  <Route index element={<FriendList/>}/>
                  <Route path='' element={<FriendList/>}/>
                  <Route path='mygroups' element={<GroupList/>}/>
                  <Route path='myposts' element={<UsersPosts/>}/>
                </Route>
                {width < desktop_breakpoint && <Route path="notifications" element={<Notifications/>}/>}
                {width < desktop_breakpoint && 
                <Route path="chats" element={<ChatHome/>}>
                  <Route path='jhondoe' element={<Chat/>}/>
                </Route>
                }
              </Route>
              <Route path="auth" element={<Auth />} />
              <Route path="*" element={<NoMatch/>} />
              
            </Routes>
            {/* <NavBar/> */}
            {/* <Homepage/> */}
            {/* <UserProfile/> */}
            {/* <GroupPage/> */}
            {/* <CreateGroup/> */}
          </div>
        </AuthProvider>
      </ViewportProvider>
    </ThemeProvider>
  );
}

export default App;
