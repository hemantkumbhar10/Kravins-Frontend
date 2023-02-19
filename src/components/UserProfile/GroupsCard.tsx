import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { NavLink } from "react-router-dom";



interface Props{
    group_name : string,
    group_owner : string,
    img:string,
    isViewing?:boolean;
    isSearching?:boolean;
}



const GroupCard = (props:Props) => {

    const {group_name, group_owner, img, isViewing, isSearching} = props;


  return <>
  <Paper
        sx={{
          height: "auto",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 1,
          width:150,
          margin:'auto',
          boxShadow:'none',
          border:'1px solid #ede9e9'
        }}
      >
        <Paper
        component={'img'}
        src={img}
          sx={{
            width: "100%",
            backgroundColor: "#4BC8F1",
            backgroundImage:{img},
            height: 40,
            position: "absolute",
            top: 0,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            boxShadow:'none'
          }}
        ></Paper>
        <Typography textAlign="center" marginTop="10px" sx={{fontSize:{xs:'16px', md:'18px'}, color:'#515365'}}>
          {group_name}
        </Typography>
        <Typography textAlign="center" sx={{fontSize:{xs:'12px', md:'14px'}, color:'#959ab5'}}>
          @{group_owner}
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="flex-end"
          marginTop={3}
        >
          <Button size="small" variant="outlined" component={NavLink} to={`mygroups/:id`} sx={{textTransform:'none'}}>
            {isViewing && <Typography color='primary'>View</Typography>}
            {isSearching && <GroupAddIcon color="primary"/>}
          </Button>
        </Stack>
      </Paper>
  </>;
};

export default GroupCard;