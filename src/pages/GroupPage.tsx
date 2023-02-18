import { Container,Grid,Box, Paper, Typography, Button, Stack } from "@mui/material";
import GroupTitleCard from "../components/GroupTitleCard";
import RecipeCard from "../components/Homecomponents/RecipeCard";

import classes from './styles/GroupPage.module.css';



const GroupPage = () => { 
  return (
    <Container
    sx={{p:'unset !important',maxWidth:'100%',mt:5}}
      className={classes.grouppage_container}
    >
      <Box className={classes.grouppage_grid} sx={{width:'100%'}} >
          <GroupTitleCard />
      </Box>
      <Box m='auto' className={classes.grouppage_scroll_div} display='flex' justifyContent='center' height='100%' width='75%'>
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