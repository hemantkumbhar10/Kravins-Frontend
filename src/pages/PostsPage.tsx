import React, { useState, useEffect, useContext } from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { CircularProgress, Fab } from "@mui/material";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

import classes from "./styles/PostsPage.module.css";
import PostCard from "../components/Homecomponents/PostCard";
import { useUserPosts } from '../services/protected/useUserPosts.api';


interface UserPostsData {
  _id: string;
  title: string,
  brief?: string,
  recipe?: string,
  image?: string,
  createdAt:string
}

interface UserProfile {
  fullname: string;
  profilepic: string;
}

interface GroupOwner {
  groupname: string;
  groupimage: string;
  groupowner: string;
}

interface UserPosts extends UserPostsData {
  user_profile: UserProfile;
  groupid: GroupOwner;
}



const PostsPage = () => {

  const [posts, setPosts] = useState<UserPosts[] | []>([]);
  const [isDataFetched, setIsDataFetched] = useState(true);

  const [page, setPage] = useState(1);

  const { pagination } = useUserPosts();

 

  useEffect(() => {
    const fetchPosts = async () => {
      setIsDataFetched(false);
      const response = await pagination(page);
      if (response.data) {
        setIsDataFetched(true);
      }
      if (page === 1) {
        setPosts(response.data);
        console.log(response.data);
      } else {
        setPosts(prevPosts => [...prevPosts, ...response.data]);
      }
    };
    fetchPosts();
  }, [page])

  const moreButtonHandler = () => {
    setPage(prevpage => prevpage + 1);


  }



  return (
    <>
      <Container className={classes.recipe_page_container} sx={{ maxHeight: '110%', overflow: "auto", pt: 3, mx: 'auto', px: 0, width: '100%' }}>
        <Box className={classes.card_child} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
          {posts?.map((post) => (
            post.groupid ? <>
              <PostCard title={post.title} brief={post.brief ? post.brief : undefined} recipe={post.recipe ? post.recipe : undefined} image={post.image ? post.image : undefined} groupname={post.groupid.groupname} username={post.groupid.groupowner} groupimage={post.groupid.groupimage} key={post._id} createdAt={post.createdAt} _id={post._id}/>
            </> : <>
              <PostCard title={post.title} brief={post.brief ? post.brief : undefined} recipe={post.recipe ? post.recipe : undefined} image={post.image ? post.image : undefined} username={post.user_profile.fullname} groupimage={post.user_profile.profilepic} key={post._id} createdAt={post.createdAt} _id={post._id}/>
            </>
          ))}
        </Box>
        <Box sx={{ height: { xs: '15vh', md: '140px' }, width: '100%', display: 'flex', justifyContent: "center", alignItems: 'flex-start' }}>
          {isDataFetched ? <Fab variant="extended" onClick={moreButtonHandler} color='primary'>
            <ExpandCircleDownIcon sx={{ mr: 1 }} />
            More
          </Fab> : <CircularProgress color='info' />}
        </Box>
      </Container>
    </>
  );
};

export default PostsPage;
