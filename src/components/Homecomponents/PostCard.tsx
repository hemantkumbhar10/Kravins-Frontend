import React, { useState, useContext } from "react";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StyledMenu from "../../ui/StyledMenu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { AuthContext } from "../../contexts/AuthContext";
import omlette from "../../assets/omlette.jpg";

import EditPost from '../createuserpost/EditPost';

import classes from "./styles/PostCard.module.css";
import { Box } from "@mui/material";
import DeletePost from "../createuserpost/DeletePost";

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

interface PostProps {
  _id:string;
  groupname?: string;
  groupimage?: string;
  username: string;
  title: string;
  brief?: string;
  recipe?: string;
  image?: string;
  createdAt: string;
}

const PostCard = (props: PostProps) => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isUpdatePostDialogueOpen, setIsUpdatePostDialogueOpen] = useState(false);
  const [isDeletePostDialogOpen, setIsDeletePostDialogOpen] = useState(false);
 

  const { authState } = useContext(AuthContext);

  const open = Boolean(anchorEl);

  const { groupname, groupimage, username, title, recipe, brief, image, createdAt, _id } = props;



  const date = new Date(createdAt);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(date);

  // console.log(formattedDate); // Output: February 21, 2023 08:07pm


  const editPostDialogueHandler = () => {
    setIsUpdatePostDialogueOpen(prevState => !prevState);
    setAnchorEl(null);
  }

  const deletePostDialogueHandler = () => {
    setIsDeletePostDialogOpen(prevState => !prevState);
    setAnchorEl(null);
  }


  const menuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

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
      sx={{ maxWidth: 390, overflow: "auto !important", marginBottom: "1vh", boxShadow: 'none', borderRadius: 2, border: '1px solid #ede9e9', px: 1 }}
      className={classes.post_container}
    >
      <CardHeader
        mx={2}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={groupimage}>
            K
          </Avatar>
        }
        action={(authState.userInfo.fullname === username || authState.userInfo.username === username) &&
          <IconButton
            aria-label="settings"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={menuClick}
          >
            <MoreVertIcon />
          </IconButton>}
        title={
          <Typography variant="subtitle1" color='primary'> {groupname ? groupname : username} </Typography>
        }
        subheader={
          <>
            {groupname ? (
              <>
                <Typography variant="subtitle2" color='#515365'>by {username}</Typography>
                <Typography variant="subtitle2" lineHeight={1} color='#515365'>
                  {formattedDate}
                </Typography>
              </>
            ) : (
              formattedDate
            )}
          </>
        }
      />


      {(authState.userInfo.fullname === username || authState.userInfo.username === username) 
      && <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={menuClose}
      >
        <MenuItem
          onClick={editPostDialogueHandler}
          disableRipple
          color="titleColor"
          sx={{ fontSize: '14px' }}
        >
          <EditIcon color="titleColor" />
          Edit
        </MenuItem>
        <MenuItem
          onClick={deletePostDialogueHandler}
          disableRipple
          color="titleColor"
          sx={{ fontSize: '14px' }}
        >
          <DeleteIcon color="titleColor" />
          Delete
        </MenuItem>
      </StyledMenu>}



      {image && <CardMedia
        sx={{ m: 'auto', objectFit:'contain',width:{xs:370,lg:520}, backgroundColor:'#fffff9' }}
        component="img"
        height="auto !important"
        image={image}
        alt={title}
        className={classes.post_img}
      />}

      <CardContent>
        <Typography variant="h6" color="primary" fontWeight='bold'>
          {title}
        </Typography>
        {brief && <Typography variant="body2" color='#959ab5'>
          {brief}
        </Typography>}
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
        <Typography color={selected ? "primary" : "disabled"}>1,265</Typography>
        <IconButton aria-label="comments">
          <CommentIcon color={selected ? "primary" : "disabled"} />
        </IconButton>
        <Typography color={selected ? "primary" : "disabled"}>27</Typography>
        <IconButton aria-label="share">
          <ShareIcon color={selected ? "primary" : "disabled"} />
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
          {recipe && <Typography paragraph color='#515365'>{recipe}</Typography>}
        </CardContent>
      </Collapse>
      <EditPost _id={_id} groupname={groupname} groupimage={groupimage} username={username} brief={brief} recipe={recipe} title={title} open={isUpdatePostDialogueOpen} close={editPostDialogueHandler} />
      <DeletePost _id={_id} open={isDeletePostDialogOpen} close={deletePostDialogueHandler}/>
    </Card>
  );
};

export default PostCard;
