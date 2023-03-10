import React, { useContext, useEffect } from "react";
import { ThemeProvider } from "@mui/material";
import classes from "./App.module.css";
import theme from "./theme";
import { ViewportProvider } from "./contexts/ViewportProvider";

import { AuthProvider } from "./contexts/AuthContext";
import { Routes, Route, Navigate } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Auth from "./pages/Auth";
import Homepage from "./pages/Homepage";
import RecipePage from "./Subpages/RecipePage";
import Kravin from "./pages/Kravin";
import PostsPage from "./pages/PostsPage";
import CocktailsPage from "./pages/CocktailsPage";
import NutrientsPage from "./pages/NutrientsPage";
import FunzonePage from "./pages/FunzonePage";
import GroupList from "./components/UserProfile/GroupList";
import Notifications from "./components/Notifications";
import Chat from "./components/Chats/Chat";
import ChatHome from "./components/Chats/ChatHome";
import UserProfile from "./pages/UserProfile";
import FriendList from "./components/UserProfile/FriendList";
import UsersPosts from "./components/UserProfile/UsersPosts";
import NoMatch from "./pages/NoMatch";
import { AuthContext } from "./contexts/AuthContext";
import { FetchProvider } from "./contexts/PrivateFetchContext";
// import UserProfile from './pages/UserProfile';
import GroupPage from './pages/GroupPage';
import SearchFriendsGroups from "./components/SearchFriendsGroups";
// import CreateGroup from './Subpages/CreateGroup';

const AppRoutes = () => {
  const width = window.innerWidth;

  const desktop_breakpoint = 900;

  const { isAuthenticated } = useContext(AuthContext);

  const isUser = isAuthenticated();

  return (
    <div className={classes.app}>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/" element={<Welcome />} />
        <Route path="home" element={<Homepage />}>
          {/* <Route path="mygroups" element={<GroupList />}/> */}
          {/* <Route path="creategroup" element={<CreateGroup/>}/> */}
          <Route index element={<PostsPage />} />
          <Route path="" element={<PostsPage />} />
          <Route path="kravins" element={<Kravin />}>
          {/* <Route path="kravins" element={<GroupPage />}>          // CREATE SEPARARTE ROUTE FOR GroupPage FROM UserPosts COMPONENT AFTER DONE WITH EDITING GROUPPAGE */}
            <Route index element={<RecipePage />} />
            <Route path="" element={<RecipePage />} />
            <Route path="cocktails" element={<CocktailsPage />} />
            <Route path="nutrients" element={<NutrientsPage />} />
            <Route path="kravinsextra" element={<FunzonePage />} />
          </Route>
          <Route
            path="myprofile"
            // element={isUser ? <UserProfile /> : <Navigate to="/home" />}
            element={ <UserProfile /> }
          >
            <Route index element={<FriendList />} />
            <Route path="" element={<FriendList />} />
            <Route path="mygroups" element={<GroupList />} >
              
            </Route>
            
            <Route path="myposts" element={<UsersPosts />} />
          </Route>
        <Route path="mygroups/:groupId" element={<GroupPage/>}/>
        <Route path="searchfriends&groups" element={<SearchFriendsGroups/>}/>

          {width < desktop_breakpoint && (
            <Route
              path="notifications"
              element={isUser ? <Notifications /> : <Navigate to="/home" />}
            />
          )}
          {width < desktop_breakpoint && (
            <Route
              path="chats"
              element={isUser ? <ChatHome /> : <Navigate to="/home" />}
            >
              <Route
                path="jhondoe"
                element={isUser ? <Chat /> : <Navigate to="/home" />}
              />
            </Route>
          )}
        </Route>
        <Route path="auth" element={<Auth />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      {/* <NavBar/> */}
      {/* <Homepage/> */}
      {/* <UserProfile/> */}
      {/* <GroupPage/> */}
      {/* <CreateGroup/> */}
    </div>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ViewportProvider>
        <AuthProvider>
          <FetchProvider>
            <AppRoutes />
          </FetchProvider>
        </AuthProvider>
      </ViewportProvider>
    </ThemeProvider>
  );
}

export default App;
