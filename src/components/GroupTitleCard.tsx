import { Card, CardMedia, CardContent, Typography,Button } from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';


import img from '../assets/group_image.jpg';


const GroupTitleCard = () => {
  return (
    <Card sx={{ maxWidth: 350, boxShadow:'none', background:'transparent' }}>
      <CardMedia component='img' height='140' image={img} alt='group'/>
      <CardContent>
        <Typography variant="h6">Delicious Street Food</Typography>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <Typography variant="subtitle2" color='primary'>Created by hamncheese69</Typography>
        <Button variant="outlined" startIcon={<PeopleIcon/>} size='small'>See members</Button>
        </div>
        <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolore perferendis aliquid, obcaecati illo veritatis dignissimos.</Typography>
        <Button size="medium" variant='contained' sx={{width:'100%', mt:1, borderRadius:20}}>Chat</Button>
      </CardContent> 
    </Card>
  );
};

export default GroupTitleCard;
