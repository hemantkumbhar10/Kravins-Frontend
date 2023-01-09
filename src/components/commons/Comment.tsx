import { useState } from "react";

import { Box } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MoreVert from "@mui/icons-material/MoreVert";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StyledMenu from "../../ui/StyledMenu";
import MenuItem from "@mui/material/MenuItem";
import DeleteIcon from '@mui/icons-material/Delete';


import EditIcon from "@mui/icons-material/Edit";

import salad from "../../assets/salat.png";

//custom styles to override
// import classes from "./styles/Comment.module.css";

interface comment {
  //add img prop here later when integrating also username and time of update
  content: string;
}

const Comment = (props: comment) => {
  const [selected, setSelected] = useState<boolean>(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const commentMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const commentMenuClose = () => {
    setAnchorEl(null);
  };

  const likeHandler = () => {
    setSelected(!selected);
  };

  const { content } = props;

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }} m="1vh auto 1vh auto">
      <Avatar
        alt="commenter"
        src={salad}
        sx={{ marginTop: "6px", marginRight: "5px", border: "1px solid white" }}
      />
      <Box sx={{ backgroundColor: "#FFCFC7", borderRadius: "25px" }}>
        <CardHeader
          sx={{ color: "black", p: "10px 16px 0 16px" }}
          action={
            <IconButton
              aria-label="settings"
              sx={{ height: "auto" }}
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={commentMenuClick}
            >
              <MoreVert />
            </IconButton>
          }
          titleTypographyProps={{
            fontSize: "min(4.5vw, 1rem)",
            height: "auto",
          }}
          subheaderTypographyProps={{ fontSize: "min(4vw, 0.7rem)" }}
          title="hamncheese69"
          subheader="yesterday 8.33 am"
        />
        
        <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={commentMenuClose}
      >
        <MenuItem onClick={commentMenuClose} disableRipple sx={{color:'#FF4B3A !important'}}>
          <EditIcon  sx={{color:'#FF4B3A !important'}}/>
          Edit
        </MenuItem>
        <MenuItem onClick={commentMenuClose} disableRipple sx={{color:'red !important'}} >
          <DeleteIcon sx={{color:'red !important'}} />
          Delete
        </MenuItem>
      </StyledMenu>

        <CardContent sx={{ p: "10px 16px 0 16px" }}>
          <Typography
            textAlign="justify"
            lineHeight="1.1rem"
            sx={{ color: "black", fontSize: "min(4.5vw, 0.9rem)" }}
          >
            {content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ marginBottom: "-10px" }}>
          <IconButton onClick={likeHandler}>
            <FavoriteIcon
              color={selected ? "primary" : "disabled"}
              sx={{
                transform: selected ? "scale(1.5)" : "scale(1)",
                transition: "all 200ms ease",
              }}
            />
          </IconButton>
          <Typography>12</Typography>
        </CardActions>
      </Box>
    </Box>
  );
};

export default Comment;
