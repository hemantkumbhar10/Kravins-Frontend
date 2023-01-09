import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

//assets
import oldfashionedcocktail from "../../assets/oldfashionedcocktail.jpg";
import burbon from '../../assets/Bourbon.png';
import angostura from '../../assets/Angostura.png'
import sugar from '../../assets/Sugar.png';
import water from '../../assets/Water.png';

import classes from './styles/RecipeCard.module.css'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const CocktailCard = () => {
  const [isIngredientExpanded, setIsIngredientExpanded] = useState(false);
  const [isRecipeExpanded, setIsRecipeExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsIngredientExpanded(!isIngredientExpanded);
  };

  const handleRecipeExpandClick = () => {
    setIsRecipeExpanded(!isRecipeExpanded);
  };



  return (
    <Paper
      sx={{
        p: 1,
        mb: 2,
        boxShadow:'none'
        , border:'1px solid #ede9e9',
        minWidth:370,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
      className={classes.recipe_container}

    >
      <Grid container >
        <Grid item xs={12}>
          <Box sx={{ width: "60%",m:'auto', mb: 1 }}>
            <Typography
              variant='body1'
              textAlign='center'
              sx={{
                p: 1,
                backgroundColor: "#ff4b3a",
                color: "#ffffff",
                width: "100%",
                borderRadius: "20px",
                textTransform:'uppercase'
              }}
            >
              Old Fashioned
            </Typography>
          </Box>
          <Box sx={{ width: 228, height: 228,m:'auto' }}>
            <Img alt="cocktail" src={oldfashionedcocktail}  sx={{borderRadius:5 }}/>
          </Box>
        </Grid>

        <Grid item xs={12} my='auto'>




          {/* Ingredients box starts */}
          <Box>
            <Box
              sx={{
                width: { xs: "100%", md: "100%" },
                mt:2,
                mb: 1,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  p: 1,
                  backgroundColor: "#0ca4fa",
                  color: "#ffffff",
                  width: {xs:'60%', md:"50%"},
                  borderRadius: "4px 20px 20px 4px",
                textTransform:'uppercase'
                }}
              >
                Ingredients
              </Typography>
              <ExpandMore
                expand={isIngredientExpanded}
                onClick={handleExpandClick}
                aria-expanded={isIngredientExpanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </Box>
            <Collapse in={isIngredientExpanded} timeout="auto" unmountOnExit sx={{ mb:5}}>
              <Grid sx={{ width: { xs: "100%", md:'400px' } ,m:'auto',justifyContent:'center'}} spacing={1} container rowGap={7} mb={8}>
                <Grid item>
                  <Box sx={{ width: 150, height: 150 }}>
                    <Img alt="ingredient" src={burbon} sx={{borderRadius:5 }}/>
                  <Typography fontSize='100%' textAlign='center' width='100%' color='primary'>4.5 cL Burbon</Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box sx={{ width: 150, height: 150, mb:5 }}>
                    <Img alt="ingredient" src={angostura} sx={{borderRadius:5 }}/>
                  <Typography fontSize='100%' textAlign='center' width='100%' color='primary' >2 dashes Angostura bitters</Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box sx={{ width: 150, height: 150 }}>
                    <Img alt="ingredient" src={sugar} sx={{borderRadius:5 }}/>
                  <Typography fontSize='100%' textAlign='center' width='100%' color='primary'>1 cube Sugar</Typography>
                  </Box>
                </Grid>
                <Grid item>
                  <Box sx={{ width: 150, height: 150 }}>
                    <Img alt="ingredient" src={water} sx={{borderRadius:5 }}/>
                  <Typography fontSize='100%' textAlign='center' width='100%' color='primary'>dash Water</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Collapse>
            </Box>
          {/* Ingredient box ends */}


          {/* Recipe box starts*/}
          <Box>
            <Box
              sx={{
                width: { xs: "100%", md: "100%" },
                mb: 1,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  p: 1,
                  backgroundColor: "#0ca4fa",
                  color: "#ffffff",
                  width: {xs:'60%', md:"50%"},
                  borderRadius: "4px 20px 20px 4px",
                textTransform:'uppercase'
                }}
              >
                Recipe
              </Typography>
              <ExpandMore
                expand={isRecipeExpanded}
                onClick={handleRecipeExpandClick}
                aria-expanded={isRecipeExpanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </Box>
            <Collapse in={isRecipeExpanded} timeout="auto" unmountOnExit>
              <Box sx={{ width: { xs: "100%", md: "400px" },m:'auto',textAlign:'justify' }}>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed provident modi harum maiores adipisci similique, excepturi praesentium voluptas voluptatum quasi omnis eveniet commodi repudiandae voluptatem voluptatibus rerum veritatis amet ipsum?</Typography>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed provident modi harum maiores adipisci similique, excepturi praesentium voluptas voluptatum quasi omnis eveniet commodi repudiandae voluptatem voluptatibus rerum veritatis amet ipsum?</Typography>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed provident modi harum maiores adipisci similique, excepturi praesentium voluptas voluptatum quasi omnis eveniet commodi repudiandae voluptatem voluptatibus rerum veritatis amet ipsum?</Typography>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed provident modi harum maiores adipisci similique, excepturi praesentium voluptas voluptatum quasi omnis eveniet commodi repudiandae voluptatem voluptatibus rerum veritatis amet ipsum?</Typography>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed provident modi harum maiores adipisci similique, excepturi praesentium voluptas voluptatum quasi omnis eveniet commodi repudiandae voluptatem voluptatibus rerum veritatis amet ipsum?</Typography>
              </Box>
            </Collapse>
            </Box>
          {/* Recipe box ends */}


          {/* Glass serve box starts*/}
            <Box
              sx={{
                width: { xs: "100%", md: "400px" },
                m:'auto',
                mt: 4,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  p: 1,
                  margin:'auto',
                  backgroundColor: "#0ca4fa",
                  color: "#ffffff",
                  width: "50%",
                  borderRadius: "20px",
                textTransform:'uppercase',
                textAlign:'center',
                }}
              >
                Glass to serve
              </Typography>
            </Box>
              <Box sx={{ width: { xs: "100%", md: "400px" },m:'auto', my:2}}>
              <Typography variant="h6" color='primary' width='100%' textAlign='center' >Old fashioned cocktail glass</Typography>
              </Box>
          {/* Recipe box ends */}





        </Grid>
      </Grid>
    </Paper>
  );
};

export default CocktailCard;