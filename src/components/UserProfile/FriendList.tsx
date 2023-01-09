import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


import img from '../../assets/salat.png';
import FriendCard from './FriendsCard';

import classes from './styles/FriendList.module.css';



const FriendList = () => {
  return <>
   <Box sx={{maxWidth:'100%'}}>
      <Grid container sx={{ minWidth: 340,m:'auto',display:'flex', justifyContent:'center', alignItems:'center', gap:{xs:4,md:2}}} className={classes.friendlist_container}>
        <Grid item >
        <FriendCard img={img} friend_name='Jhon doe' friend_username='hamncheese@69'/>
        </Grid>
        <Grid item >
        <FriendCard img={img} friend_name='Jhon doe' friend_username='hamncheese@69'/>
        </Grid>
        <Grid item >
        <FriendCard img={img} friend_name='Jhon doe' friend_username='hamncheese@69'/>
        </Grid>
        <Grid item >
        <FriendCard img={img} friend_name='Jhon doe' friend_username='hamncheese@69'/>
        </Grid>
        <Grid item >
        <FriendCard img={img} friend_name='Jhon doe' friend_username='hamncheese@69'/>
        </Grid>
        <Grid item >
        <FriendCard img={img} friend_name='Jhon doe' friend_username='hamncheese@69'/>
        </Grid>
        <Grid item >
        <FriendCard img={img} friend_name='Jhon doe' friend_username='hamncheese@69'/>
        </Grid>
        <Grid item >
        <FriendCard img={img} friend_name='Jhon doe' friend_username='hamncheese@69'/>
        </Grid>
        <Grid item >
        <FriendCard img={img} friend_name='Jhon doe' friend_username='hamncheese@69'/>
        </Grid>
        <Grid item >
        <FriendCard img={img} friend_name='Jhon doe' friend_username='hamncheese@69'/>
        </Grid>
        <Grid item >
        <FriendCard img={img} friend_name='Jhon doe' friend_username='hamncheese@69'/>
        </Grid>
        <Grid item >
        <FriendCard img={img} friend_name='Jhon doe' friend_username='hamncheese@69'/>
        </Grid>
        <Grid item >
        <FriendCard img={img} friend_name='Jhon doe' friend_username='hamncheese@69'/>
        </Grid>
        <Grid item >
        <FriendCard img={img} friend_name='Jhon doe' friend_username='hamncheese@69'/>
        </Grid>
        <Grid item >
        <FriendCard img={img} friend_name='Jhon doe' friend_username='hamncheese@69'/>
        </Grid>
        <Grid item >
        <FriendCard img={img} friend_name='Jhon doe' friend_username='hamncheese@69'/>
        </Grid>
        <Grid item >
        <FriendCard img={img} friend_name='Jhon doe' friend_username='hamncheese@69'/>
        </Grid>
        <Grid item >
        <FriendCard img={img} friend_name='Jhon doe' friend_username='hamncheese@69'/>
        </Grid>
        <Grid item >
        <FriendCard img={img} friend_name='Jhon doe' friend_username='hamncheese@69'/>
        </Grid>
        <Grid item >
        <FriendCard img={img} friend_name='Jhon doe' friend_username='hamncheese@69'/>
        </Grid>
        <Grid item >
        <FriendCard img={img} friend_name='Jhon doe' friend_username='hamncheese@69'/>
        </Grid>
        <Grid item >
        <FriendCard img={img} friend_name='Jhon doe' friend_username='hamncheese@69'/>
        </Grid>
        <Grid item >
        <FriendCard img={img} friend_name='Jhon doe' friend_username='hamncheese@69'/>
        </Grid>
        <Grid item >
        <FriendCard img={img} friend_name='Jhon doe' friend_username='hamncheese@69'/>
        </Grid>
        <Grid item >
        <FriendCard img={img} friend_name='Jhon doe' friend_username='hamncheese@69'/>
        </Grid>
      </Grid>
    </Box>
</>
};

export default FriendList;
