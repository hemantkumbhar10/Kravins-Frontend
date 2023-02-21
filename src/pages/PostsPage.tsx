import React, { useState, useEffect, useRef } from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";

import classes from "./styles/PostsPage.module.css";
import PostCard from "../components/Homecomponents/PostCard";
import { useUserPosts } from '../services/protected/useUserPosts.api';


interface UserPostsData {
  postid: string;
  title: string,
  brief?: string,
  recipe?: string,
  image?: string,
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
  const [page, setPage] = useState(1);
  const divRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver>();

  const { pagination } = useUserPosts();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await pagination(page);
      // setPosts(response.data);
      setPosts(prevPosts => [...prevPosts, ...response.data]);
    };
    fetchPosts();
  }, [page])



  useEffect(() => {
    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0 && entry.target === divRef.current) {
          // Progress div is visible to the user, fetch next data
          setPage(previous => previous + 1);
        }
      });
    });

    if (divRef.current) {
      observerRef.current.observe(divRef.current);
    }

    return () => {
      if (observerRef.current && divRef.current) {
        observerRef.current.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <>
      <Container className={classes.recipe_page_container} sx={{ maxHeight: '110%', overflow: "auto", pt: 3, mx: 'auto', px: 0, width: '100%' }}>
        <Box className={classes.card_child} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
          {posts?.map((post) => (
            post.groupid ? <>
              <PostCard title={post.title} brief={post.brief ? post.brief : undefined} recipe={post.recipe ? post.recipe : undefined} image={post.image ? post.image : undefined} groupname={post.groupid.groupname} username={post.groupid.groupowner} groupimage={post.groupid.groupimage} key={post.postid} />
            </> : <>
              <PostCard title={post.title} brief={post.brief ? post.brief : undefined} recipe={post.recipe ? post.recipe : undefined} image={post.image ? post.image : undefined} username={post.user_profile.fullname} groupimage={post.user_profile.profilepic} key={post.postid} />
            </>
          ))}
        </Box>
        <Box ref={divRef} sx={{ height: { xs: '15vh', md: '70px' }, width: '100%', display: 'flex', justifyContent: "center", alignItems: 'flex-start' }}>
          <CircularProgress color='info' />
        </Box>
      </Container>
    </>
  );
};

export default PostsPage;
