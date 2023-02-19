import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import { useUserGroups } from '../../services/protected/useUserGroups.api';

import Box from '@mui/material/Box';
import {Typography} from '@mui/material';


import img from '../../assets/salat.png';
import GroupCard from './GroupsCard';
import cool_pinapple from '../../assets/cool_pinapple.png';

import classes from './styles/GroupList.module.css';


interface Group {
  _id:string;
  groupname:string;
  groupbio:string;
  groupimage:string;
  groupowner:string;
}

const GroupList = () => {
  const [groups, setGroups]  = useState<[]>([]);

  const {getMyGroups} = useUserGroups();

  useEffect(()=>{
    const getMyAllGroups =async()=>{
    try{
      const response = await getMyGroups();
      setGroups(response.data);
      console.log(response);
    }catch(e){
      console.log('i got this error for groups------------>',e)
    }}
    getMyAllGroups();
  },[])



  return <>
   <Box sx={{width:'100%'}}>
      <Grid container sx={{ minWidth:340,m:'auto',display:'flex', justifyContent:'center', alignItems:'center', gap:{xs:4,md:2}}} className={classes.grouplist_grid_container}>
      {!groups && <Box sx={{width:{xs:'100%', md:'35vw', height:'14vh',display:'flex', justifyContent:'center',alignItems:'center', flexDirection:'column',}}}>
          <img src={cool_pinapple} alt="you have no groups" loading='lazy' style={{width:200, height:400,paddingTop:150}}></img>
          <Typography sx={{width:'100%', textAlign:'center'}}>You dont have any groups. Pinapple wants you to join or create one.</Typography>
        </Box>}
        {groups && groups.map((group:Group)=>(
          <Grid item key={group._id}>
          <GroupCard img={group.groupimage} group_name={group.groupname} group_owner={group.groupowner} isViewing={true} ID={group._id}/>
          </Grid>
        ))}
      </Grid>
      <Box sx={{width:{xs:0, md:'35vw', height:'50vh'}}}></Box>
    </Box>
</>
};

export default GroupList;
