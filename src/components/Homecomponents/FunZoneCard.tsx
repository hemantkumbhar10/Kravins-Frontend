import * as React from "react";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StyledMenu from "../../ui/StyledMenu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


import kravinslogo from '../../assets/whitelogo.png';

import classes from "./styles/PostCard.module.css";


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



const FunZoneCard = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [selected, setSelected] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);


//   const menuClick = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

  const menuClose = () => {
    setAnchorEl(null);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const likeHandler = () => {
    setSelected(!selected);
  };

  return (
    <Card
      sx={{ minWidth: 370, overflow: "auto !important", marginBottom: "1vh",p:1, border:'1px solid #ede9e9',boxShadow:'none' }}
      className={classes.post_container}
    >
      <CardHeader
      sx={{'& .MuiCardHeader-title':{fontSize:'22px'}}}
        avatar={
          <Avatar sx={{ bgcolor: red[500], p:0.5, }} aria-label="kravins" src={kravinslogo} >
            K
          </Avatar>
        }
        title="Kravin'"
        subheader='how you doin'
      />


      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={menuClose}
      >
        <MenuItem
          onClick={menuClose}
          disableRipple
          sx={{ color: "#FF4B3A !important" }}
        >
          <EditIcon sx={{ color: "#FF4B3A !important" }} />
          Edit
        </MenuItem>
        <MenuItem
          onClick={menuClose}
          disableRipple
          sx={{ color: "red !important" }}
        >
          <DeleteIcon sx={{ color: "red !important" }} />
          Delete
        </MenuItem>
      </StyledMenu>

      {/* <CardMedia
        component="img"
        height="auto"
        image={omlette}
        alt="Paella dish"
        className={classes.post_img}
      /> */}
      <CardContent>
        <Typography variant="h6" color="primary">
          Bread Omlette
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={likeHandler}>
          <FavoriteIcon
            color={selected ? "primary" : "disabled"}
            sx={{
              transform: selected ? "scale(1.5)" : "scale(1.2)",
              transition: "all 200ms ease",
            }}
          />
        </IconButton>
        <Typography>1,265</Typography>
        <IconButton aria-label="comments">
          <CommentIcon color="primary" />
        </IconButton>
        <Typography>27</Typography>
        <IconButton aria-label="share">
          <ShareIcon color="primary" />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default FunZoneCard;
