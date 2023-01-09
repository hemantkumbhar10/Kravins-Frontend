import { Box } from "@mui/material";
import RecipeCard from "../Homecomponents/RecipeCard";

const UsersPosts = () =>{
    return(
        <Box sx={{maxWidth:'100%'}} >
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        </Box>
    )
}


export default UsersPosts;