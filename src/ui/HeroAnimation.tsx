import classes from "./styles/HeroAnimation.module.css";
import toyface_girl from "../assets/toyface_girl.png";
import toyface_man from "../assets/toyface_man.png";

const HeroAnimation = () => {
  return (
    <div className={classes.toyfaces}>
      <img
        className={classes.toyface_girl}
        src={toyface_girl}
        alt="Toyface girl"
      />
      <img
        className={classes.toyface_man}
        src={toyface_man}
        alt="Toyface man"
      />
      <div className={classes.toyfaces_overlay}></div>
    </div>
  );
};

export default HeroAnimation;
