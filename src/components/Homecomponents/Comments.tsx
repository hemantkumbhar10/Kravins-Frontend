// import {useState} from 'react'

import RecipeCard from "./RecipeCard";
import { Container } from "@mui/material";
import { Box } from "@mui/material";

import classes from "./styles/Comments.module.css";
import Comment from "../commons/Comment";
import Reply from '../commons/Reply';

const Comments = () => {



  return (
    <Container
      className={classes.comments_page_container}
      maxWidth="sm"
      sx={{ maxHeight: "100%", overflow: "auto" }}
    >
      <RecipeCard />
      <Reply/>
      <Box className={classes.card_child}>
        <Comment content="lorem ipsume did well together but aint worht nothing there all but shaless acts of em" />
        <Comment content="reat performance from USA, dont know why dest was " />
        <Comment content="hi!" />
      </Box>
    </Container>
  );
};

export default Comments;
