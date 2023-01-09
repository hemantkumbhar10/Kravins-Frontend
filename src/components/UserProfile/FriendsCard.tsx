import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

import classes from './styles/FriendCard.module.css';


interface Props{
    friend_name : string,
    friend_username : string,
    img:string,
}



const FriendCard = (props:Props) => {

    const {friend_name, friend_username, img} = props;


  return <>
  <Paper
      className={classes.user_profile_homepage_card}
        sx={{
          height: "auto",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 1,
          width:150,
          margin:'auto',
          boxShadow:'none',
          border:'1px solid #ede9e9'
        }}
      >
        <Paper
          sx={{
            width: "100%",
            backgroundColor: "#4BC8F1",
            height: 50,
            position: "absolute",
            top: 0,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            boxShadow:'none'
          }}
        ></Paper>
        <Avatar
          src={img}
          alt="user"
          sx={{
            marginTop:1
            ,
            height: { xs: 50, md: 60 },
            width: { xs: 50, md: 60 },
          }}
        />
        <Typography textAlign="center" marginTop="10px" sx={{fontSize:{xs:'16px', md:'18px'}, color:'#515365'}}>
          {friend_name}
        </Typography>
        <Typography textAlign="center"  sx={{fontSize:{xs:'12px', md:'14px'}, color:'#959ab5'}}>
          @{friend_username}
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="flex-end"
          marginTop={3}
        >
          <Button size="small" variant="outlined">
          <PersonAddIcon color="primary"/>
          </Button>
        </Stack>
      </Paper>
  </>;
};

export default FriendCard;



    