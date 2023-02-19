import React, {useEffect,  useState} from 'react';
import { Container,Box, IconButton, Tooltip} from "@mui/material";
import GroupTitleCard from "../components/GroupTitleCard";
import RecipeCard from "../components/Homecomponents/RecipeCard";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import classes from './styles/GroupPage.module.css';
import { NavLink, useParams } from "react-router-dom";
import { useUserGroups } from '../services/protected/useUserGroups.api';


interface Group { 
  groupname:string;
  groupbio:string;
  groupimage:string;
  groupowner:string;
}



const GroupPage = () => { 

  const {groupId} = useParams();
  const {getGroupById} = useUserGroups();

  const [group, setGroup] = useState<Group>({groupname:'why mess up with my site?', groupbio:'do it but be carefull please', groupimage:'', groupowner:'i am the owner'});

  useEffect(()=>{ 
    const getGroup = async()=>{
      if(groupId){
        try{
          const {data} = await getGroupById(groupId);
          setGroup(data);
        }catch(e){
          console.log('Something went wrong',e);
        }
      } else{
        console.log('no id provided');
        return;
      }
    };
    getGroup();
  },[])


  return (
    <Container
    sx={{width:'100%',mt:{xs:3}, px:{md:'0 !important', lg:'18.5px !important'}}}
      className={classes.grouppage_container}
    >
      <Tooltip title='Back to Groups'><IconButton size="small" component={NavLink} to='/home/myprofile/mygroups'><KeyboardBackspaceIcon color='primary'/></IconButton></Tooltip>
      <Box className={classes.grouppage_grid} sx={{width:'100%',}} >
          <GroupTitleCard groupname={group.groupname} groupbio={group.groupbio} groupowner={group.groupowner} groupimage={group.groupimage}/>
      </Box>
      <Box m='auto' className={classes.grouppage_scroll_div} display='flex' justifyContent='center' height='100%' width={{xs:'100%', md:'85%'}} p={-1}>
            <div>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            </div>
        </Box>
    </Container>
  );
};

export default GroupPage;

// columns={{xs:1, sm:1, md:1}}

/**
 * <Grid item m='auto' md={12} className={classes.grouppage_scroll_div} display='flex' justifyContent='center' width={{xs:'100%', md: '50%'}}>
            <div>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            </div>
        </Grid>
 */