import RecipeCard from "../components/Homecomponents/RecipeCard";
import SearchBox from "../components/Homecomponents/SearchBox";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";

import classes from "./styles/RecipePage.module.css";

const RecipePage = () => {
  return (
    <>
      <div style={{ width: "100%" }} className={classes.searchbox_container}>
        <SearchBox />
      </div>
      <Container
        className={classes.recipe_page_container}
        sx={{ maxHeight: "87%", width: "100%", overflow: "auto" }}
      >
        <Box
          className={classes.card_child}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </Box>
        <Box
          sx={{
            height: { xs: "15vh", md: "70px" },
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <CircularProgress color="info" />
        </Box>
      </Container>
    </>
  );
};

export default RecipePage;
