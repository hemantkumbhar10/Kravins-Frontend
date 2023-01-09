import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


import img from '../../assets/salat.png';
import GroupCard from './GroupsCard';

import classes from './styles/GroupList.module.css';



const GroupList = () => {
  return <>
   <Box sx={{maxWidth:'100%'}}>
      <Grid container sx={{ minWidth: 340,m:'auto',display:'flex', justifyContent:'center', alignItems:'center', gap:{xs:4,md:2}}} className={classes.grouplist_grid_container}>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
        <Grid item >
        <GroupCard img={img} group_name='Street food Art' group_owner='hamncheese@69'/>
        </Grid>
      </Grid>
    </Box>
</>
};

export default GroupList;
