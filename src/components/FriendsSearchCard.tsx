import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import jhondoe from '../assets/jhondoe.png';
import { blue } from '@mui/material/colors';

 const FriendsSearchCard = ()=> {

  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex',width: { xs: 370, sm: 590, md: 537, }, marginBottom: "0.5vh", boxShadow: 'none',border: '1px solid #ede9e9', borderTopLeftRadius:50,borderBottomLeftRadius:50, justifyContent:'space-between', height:70 }}>
      <Box sx={{ display: 'flex', flexDirection: 'row',}}>
      <CardMedia
        component="img"
        sx={{ width: 70, mr:0, borderRadius:20 }}
        image={jhondoe}
        alt="Live from space album cover"
      />
        <CardContent sx={{ flex: '1 0 auto', alignItems:'center', mt:0, pt:1 }}>
          <Typography component='div'  color='primary' sx={{backgroundColor:'#edf2f6',px:2, borderRadius:20, cursor:'pointer', fontSize:{xs:16, md:18}}}>
            Jhon Doe
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{px:2,fontSize:{xs:14, md:16} }}>
            @benten
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: {xs:15, md:35},}}>
          <IconButton aria-label="add friend"  color='blue'>
            <PersonAddAlt1Icon sx={{fontSize:{xs:25, md:25}}} />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}

export default FriendsSearchCard;