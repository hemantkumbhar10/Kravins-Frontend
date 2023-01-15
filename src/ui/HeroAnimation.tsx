import classes from "./styles/HeroAnimation.module.css";
import Box from "@mui/material/Box";
import cookingPot from '../assets/cooking-pot.gif';

const HeroAnimation = () => {
  return (
    <Box sx={{width:'600px', height:'600px', display:'flex', justifyContent:'center', objectFit:'contain', margin:'auto', marginTop:-17}}>
      <img src={cookingPot} alt="Cooking Pot" aria-hidden style={{width:'100%',margin:'auto'}}/>
    </Box>
  );
};

export default HeroAnimation;
