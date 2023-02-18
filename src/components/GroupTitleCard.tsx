import { Card, Grid, CardActions, CardMedia, CardContent, Typography, Button, Tooltip, IconButton, Box } from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import EmailIcon from '@mui/icons-material/Email';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import img from '../assets/group_image.jpg';


const GroupTitleCard = () => {
  return (
    // mt 1300
    <Box sx={{ width: { sm: '100%', md: '95%' }, m: 'auto', boxShadow: 'none', background: 'transparent', }}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row',}, justifyContent: 'space-between',  width:'100%'  }}>
        <Box sx={{width:{xs:'100%', md:'50%'},m:'auto'}}>
          <CardMedia component='img' sx={{height:140, width:220, objectFit:'cover'}} image={img} alt='group' />
        </Box>
        <Box sx={{width:{xs:'100%', md:'400px'}}}>
        <Typography variant="h6">Delicious Street Food</Typography>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <Typography variant="subtitle2" color='primary'>Created by hamncheese69</Typography>
        </div>
        <Typography variant="body2" textAlign='justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolore perferendis aliquid, obcaecati illo veritatis dignissimos.</Typography>
        </Box>
      </Box>
      <CardActions sx={{width:'auto !important',backgroundColor:'white !important', borderRadius:20, justifyContent:'center',mt:1}} >
      <Tooltip title='Chat'><IconButton size="medium" sx={{width:'50px'}}><EmailIcon color="primary" /></IconButton></Tooltip>
      <Tooltip title='See Members'><IconButton size="medium"  sx={{width:'50px'}}><GroupsIcon color="primary"/></IconButton></Tooltip>
      <Tooltip title='Create Post' ><IconButton size="medium" sx={{width:'50px'}}><AddCircleIcon color="primary"/></IconButton></Tooltip>
      {/* hidden button except for creater */}
    <Tooltip title='Group Settings'><IconButton size="medium"  sx={{width:'50px'}}><MoreVertIcon color="primary"/></IconButton></Tooltip> 
   </CardActions>
    </Box>
  )
}


export default GroupTitleCard;





  