import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {CircularProgress} from "@mui/material";

import classes from "./styles/PostsPage.module.css";
import PostCard from "../components/Homecomponents/PostCard";




const PostsPage = () => {
  return (
    <>
    <Container className={classes.recipe_page_container}  sx={{maxHeight:'110%', overflow: "auto",  pt:3,mx:'auto',px:0,width:'100%'}}>
      <Box className={classes.card_child} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <PostCard username='Jhon doe'/>
        <PostCard groupname=" Delicious Street food" username="hamncheese69"/>
        <PostCard username='Jhon doe'/>
        <PostCard groupname=" Delicious Street food" username="hamncheese69"/>
      </Box>
      <Box sx={{height:{xs:'15vh', md:'70px'},width:'100%', display:'flex', justifyContent:"center",alignItems:'flex-start'}}>
        <CircularProgress color='info'/>
      </Box>
    </Container>
    </>
  );
};

export default PostsPage;
