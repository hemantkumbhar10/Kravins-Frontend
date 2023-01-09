import { Grid, Paper, useScrollTrigger, Fade,Box, Fab, Toolbar } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import GroupTitleCard from "../components/GroupTitleCard";
import RecipeCard from "../components/Homecomponents/RecipeCard";



import classes from './styles/GroupPage.module.css';






interface Props {
    children: React.ReactElement;
  }
  
//   function HideOnScroll(props:Props) {
//     const { children } = props;

//     const trigger = useScrollTrigger();
  
//     return (
//       <Slide appear={false} direction="down" in={!trigger}>
//         {children}
//       </Slide>
//     );
//   }

function ScrollTop(props: Props) {
    const { children } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 100,
 })

 const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );

};




const GroupPage = () => {





  return (
    <Paper
      sx={{
        position:'absolute',
        background: "#e7e3e3",
        boxShadow: "none",
        width:'100%',
        height:'100vh'
      }}
      className={classes.grouppage_container}
    >
        <Toolbar id="back-to-top-anchor" sx={{minHeight:'10px'}}/>
      <Grid container spacing={1} className={classes.grouppage_grid} >
        <Grid item m='auto' md={4} mt='0' className={classes.grouppage_titlecard} >
          <GroupTitleCard />
        </Grid>
        <Grid item m='auto' md={6} className={classes.grouppage_scroll_div}>
            <div >
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
      </Grid>
      <ScrollTop >
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Paper>
  );
};

export default GroupPage;

// columns={{xs:1, sm:1, md:1}}
