import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import classes from "./styles/Nutrients.module.css";
import NutrientsCard from "../components/Homecomponents/NutrientsCard";
import { Grid, Typography } from "@mui/material";
import NutrientsSearchBox from "../components/Homecomponents/NutrientSearchBox";


import { useAuth } from "../hooks/useAuth";

const NutrientsPage = () => {
  const { authed } = useAuth();

  const LoginError = () => (
    <Box
      sx={{
        maxWidth: 330,
        backgroundColor: "#ff4b3a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p:1,borderRadius:5,mt:-50  }}
    >
      <Typography color='#ffffff' textAlign='center' mb={1} variant='h5'>
        Tell me what you ate or planning to eat & I'll give you nutrition facts
        about it!
      </Typography>
      <Typography color="#ffffff" textAlign='center' variant="h6">
        Aww. Its for precious people like you after you Login ofcourse! ;){" "}
      </Typography>
    </Box>
  );

  return (
    <>
      {authed ? (
        <>
          <div
            style={{ width: "100%",}}
            className={classes.searchbox_container}
          >
            <NutrientsSearchBox />
          </div>
          <Container
            className={classes.recipe_page_container}
            sx={{
              width: '100%',
              maxHeight: "100%",
              overflowX:'hidden',
              overflowY: "auto",
              padding:0
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                pt: 1,
              }}
            >
              <Typography
                sx={{ backgroundColor: "#ffffff", borderRadius: 5, padding: 1, px:4}}
                fontWeight="bold"
                variant="h4"
                color="primary"
              >
                1054
              </Typography>

              <Typography
                textAlign="center"
                sx={{
                  minWidth: 370,
                  backgroundColor: "#ffffff",
                  borderRadius: 2,
                  padding: 1,
                  color: "#0ca4fa",
                  mt: 1,
                  mb: 6,
                }}
                variant="h6"
                className={classes.recipe_container}
              >
                Total calories for Brisket, Brisket and Brisket
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              sx={{minWidth: 370,m:'auto',px:1,}}
              className={classes.recipe_container}
            >
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                m='auto'
              >
                <Grid item  m='auto'>
                  <NutrientsCard />
                </Grid>
                <Grid item>
                  <NutrientsCard />
                </Grid>
                <Grid item>
                  <NutrientsCard />
                </Grid>
              </Grid>
            </Box>
            <Box
              sx={{
                height: { xs: "25vh", md: "140px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            ></Box>
          </Container>
        </>
      ) : (
        <LoginError/>
      )}
    </>
  );
};

export default NutrientsPage;
