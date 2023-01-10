import {Box,Typography} from '@mui/material'


import { Link } from 'react-router-dom';
import ErrorNoMatch from '../ui/ErrorNoMatch';






const NoMatch =() =>{
    return<Box sx={{position:'relative', width:'100%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

        <Box mb={3}>
            <Typography variant='h1' color='#515365' fontWeight='bold' textAlign='center'>404</Typography>
            <Typography variant='h5' color='#959ab5' textAlign='center'>Page Not Found</Typography>
        </Box>
        <Typography component={Link} to='/home' variant='subtitle2'  textAlign='center' mb={2}>Everybody makes mistakes. Dont worry about it. Just click on me to continue.</Typography>
        <ErrorNoMatch style={{width:'200px',height:'auto'}}/>
        {/* // <img src={nomatch} alt="logo"  */}

    </Box>
}

export default NoMatch;