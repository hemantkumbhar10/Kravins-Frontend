import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import classes from './styles/SearchBox.module.css';

const SearchBox = ()=> {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',width:{xs:'98%',sm:'80%',md:'90%'}, m:'0px auto 2px auto',boxShadow:'none', border:'1px solid #ede9e9'}}
      className={classes.search_box}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Food for tons of recipes.."
        inputProps={{ 'aria-label': 'search recipes' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBox;