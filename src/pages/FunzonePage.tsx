import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {CircularProgress} from "@mui/material";

import classes from "./styles/PostsPage.module.css";
import FunZoneCard from "../components/Homecomponents/FunZoneCard";




const FunzonePage = () => {
  return (
    <>
    <Container className={classes.recipe_page_container} sx={{maxHeight:'100%', overflow: "auto",mt:{xs:9,md:11}}}>
      <Box className={classes.card_child} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <FunZoneCard />
        <FunZoneCard/>
        <FunZoneCard/>
        <FunZoneCard />
      </Box>
      <Box sx={{height:{xs:'25vh', md:'100px'},width:'100%', display:'flex', justifyContent:"center",alignItems:'flex-start'}}>
        <CircularProgress color='info'/>
      </Box>
    </Container>
    </>
  );
};

export default FunzonePage;
