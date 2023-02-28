import React, { useState, useContext, FormEvent } from 'react';
import { Button, Container, Box } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import classes from './styles/SearchFriendsGroups.module.css';
import FriendsSearchCard from './FriendsSearchCard';
import CircularProgress from '@mui/material/CircularProgress';
import GroupSearchCard from './GroupSearchCard';


import { useSearchFriends } from '../services/protected/useSearchFriends.api';



const SearchFriendsGroups = () => {

    const {searchFriendsAndGroups} = useSearchFriends();
    const [searchQuery, setSearchQuery] = useState<string>('');

    const searchClickHandler = (event:FormEvent<HTMLTextAreaElement | HTMLInputElement>) =>{
        event.preventDefault();
        setSearchQuery(event.currentTarget.value);
    }

    return (<Box sx={{width:'100%', height:'100vh'}}>
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: { xs: 370, sm: 590, md: 560, },border: '1px solid #ede9e9', boxShadow: 'none',m:'auto',mt:1}}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search for friends, groups. "
                inputProps={{ 'aria-label': 'Search for friends, groups' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
        <Container
            className={classes.search_page_container}

            sx={{
                maxHeight: '87%',
                width: '100%',
                overflow: "auto"
            }}>
            <Box className={classes.card_child} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>

                <GroupSearchCard/>
                <GroupSearchCard/>

                <GroupSearchCard/>
                <GroupSearchCard/>
                <FriendsSearchCard />
                <FriendsSearchCard />
                <FriendsSearchCard />
                <FriendsSearchCard />
                <FriendsSearchCard /> 
                <FriendsSearchCard /> 
                <FriendsSearchCard /> 
                <FriendsSearchCard /> 
                <FriendsSearchCard /> 
                <FriendsSearchCard /> 
                <FriendsSearchCard /> 
                <FriendsSearchCard /> 
                <FriendsSearchCard /> 
            </Box>
            <Box sx={{ height: { xs: '15vh', md: '70px' }, width: '100%', display: 'flex', justifyContent: "center", alignItems: 'flex-start' }}>
                <CircularProgress color='info'/>
            </Box>
            <Box sx={{ height: { xs: '15vh', md: '70px' }, width: '100%', display: 'flex', justifyContent: "center", alignItems: 'flex-start', }}>
            </Box>
        </Container>
    </Box>)
}

export default SearchFriendsGroups;