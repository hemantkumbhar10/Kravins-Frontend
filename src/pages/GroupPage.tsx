import { Container,Grid,Box, Paper, Typography, Button, Stack } from "@mui/material";
import GroupTitleCard from "../components/GroupTitleCard";
import RecipeCard from "../components/Homecomponents/RecipeCard";

import classes from './styles/GroupPage.module.css';



const GroupPage = () => { 
  return (
    <Container
    sx={{width:'100%',mt:{xs:3}, px:{md:'0 !important', lg:'18.5px !important'}}}
      className={classes.grouppage_container}
    >
      <Box className={classes.grouppage_grid} sx={{width:'100%',}} >
          <GroupTitleCard />
      </Box>
      <Box m='auto' className={classes.grouppage_scroll_div} display='flex' justifyContent='center' height='100%' width={{xs:'100%', md:'85%'}} p={-1}>
            <div>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            </div>
        </Box>
    </Container>
  );
};

export default GroupPage;

// columns={{xs:1, sm:1, md:1}}

/**
 * <Grid item m='auto' md={12} className={classes.grouppage_scroll_div} display='flex' justifyContent='center' width={{xs:'100%', md: '50%'}}>
            <div>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            </div>
        </Grid>
 */