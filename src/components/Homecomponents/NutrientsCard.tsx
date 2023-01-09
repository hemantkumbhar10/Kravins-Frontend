import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Box, Chip } from "@mui/material";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import classes from './styles/RecipeCard.module.css'


const NutrientsCard = () => {
  return (
    <Paper
      sx={{
        p: 2,
        mb: 2,
        mx:'auto',
        minWidth: 370,
        border:'1px solid #ede9e9',boxShadow:'none',
        borderRadius:5,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
      className={classes.recipe_container}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Typography variant="h6" color="primary" fontWeight="bold">
          Brisket
        </Typography>
        <Chip label="454g" sx={{ ml: 2 }} size="medium" color="primary" />
      </Box>


      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          mt:1
        }}
      >
        <Typography variant="h6" sx={{color:'#0ca4fa'}} fontWeight="bold">
          318
        </Typography>
        <Typography variant="h6" sx={{color:'#0ca4fa', ml:0.5}}  >
          Calories
        </Typography>
        
      </Box>




      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <List sx={{ width: "50%" }}>
          <ListItem
            disableGutters
            secondaryAction={
              <Chip
                label="14.8g"
                size="medium"
                sx={{ mr: 1 }}
                color="success"
              />
            }
          >
            <ListItemText primary={`Total fat:`} />
          </ListItem>

          <ListItem
            disableGutters
            secondaryAction={
              <Chip
                label="32.2g"
                size="medium"
                sx={{ mr: 1 }}
                color="success"
              />
            }
          >
            <ListItemText primary={`Saturated fat:`} />
          </ListItem>

          <ListItem
            disableGutters
            secondaryAction={
              <Chip
                label="487mg"
                size="medium"
                sx={{ mr: 1 }}
                color="success"
              />
            }
          >
            <ListItemText primary={`Cholesterol:`} />
          </ListItem>

          <ListItem
            disableGutters
            secondaryAction={
              <Chip
                label="212mg"
                size="medium"
                sx={{ mr: 1 }}
                color="success"
              />
            }
          >
            <ListItemText primary={`Sodium:`} />
          </ListItem>
        </List>

        <List sx={{ width: "50%" }}>
          <ListItem
            disableGutters
            secondaryAction={
              <Chip label="41.1g" size="medium" color="success" />
            }
          >
            <ListItemText primary={`Carbs:`} />
          </ListItem>

          <ListItem
            disableGutters
            secondaryAction={
              <Chip label="3.8g" size="medium" color="success" />
            }
          >
            <ListItemText primary={`Fiber:`} />
          </ListItem>

          <ListItem
            disableGutters
            secondaryAction={
              <Chip label="0.3g" size="medium" color="success" />
            }
          >
            <ListItemText primary={`Sugar:`} />
          </ListItem>

          <ListItem
            disableGutters
            secondaryAction={
              <Chip label="3.4g" size="medium" color="success" />
            }
          >
            <ListItemText primary={`Protein:`} />
          </ListItem>
        </List>
      </Box>
    </Paper>
  );
};

export default NutrientsCard;
