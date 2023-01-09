import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CocktailsSearchBox from "../components/Homecomponents/CocktailsSearchBox";

import classes from "./styles/Cocktails.module.css";
import CocktailCard from "../components/Homecomponents/CocktailCard";



const CocktailsPage = () => {
  return (
    <>
        <div style={{width:'100%' }} className={classes.searchbox_container}>
      <CocktailsSearchBox />
    </div>
    <Container
     className={classes.recipe_page_container}

      sx={{
        maxHeight:'87%',
        width:'100%',
         overflow: "auto"
         }}>


      <Box className={classes.card_child} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <CocktailCard/>
        <CocktailCard/>
        <CocktailCard/>
      </Box>
      <Box sx={{height:{xs:'15vh', md:'70px'},width:'100%', display:'flex', justifyContent:"center",alignItems:'flex-start'}}>
        {/* <CircularProgress color='info'/> */}
      </Box>
    <Box sx={{height:{xs:'15vh', md:'70px'},width:'100%', display:'flex', justifyContent:"center",alignItems:'flex-start',}}>
      </Box>
    </Container>
    </>
  );
};

export default CocktailsPage;
