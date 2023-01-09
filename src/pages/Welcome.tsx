
import {Link} from 'react-router-dom'

import logo from "../assets/DarkLogo.png";

// import Button from "../components/Button";
import HeroAnimation from "../ui/HeroAnimation";
import classes from "./styles/Welcome.module.css";
import {Button} from '@mui/material';

const styles = {
  // bottom:'20vh'
  // marginTop:1
  top: "80%",
};

const Welcome = () => {


  
  return (
    <div className={classes.Welcome}>
      <div className={classes.logo_bg}>
        <img src={logo} alt="Kravin logo" />
      </div>
      <div className={classes.container_for_heros}>
        <div className={classes.hero_titles}>
          <h1>
            Kravin<span>&#8217;</span>
          </h1>
          <h3>Eat, share, connect and crave together.</h3>
        </div>
        <HeroAnimation />
      </div>
      {/* <Button title={"Get started"} customStyles={styles} /> */}
      <Button variant='contained' color='white' size='large' sx={{height:50, width:300, top:'80%', borderRadius:50, color:'#FF4B3A', fontSize:'20px', textTransform:'none'}} component={Link} to='/home'>Get Started</Button>
    </div>
  );
};

export default Welcome;
