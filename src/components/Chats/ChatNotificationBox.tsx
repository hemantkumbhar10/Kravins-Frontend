
import React, {useState,useContext} from 'react';

//mui components
import { Paper, Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";

//asssets
import Avatar from "@mui/material/Avatar";

import jhondoe from "../../assets/jhondoe.png";

import classes from "./styles/ChatHomeMessages.module.css";
import ChatModal from './ChatModal';

import { viewportContext } from '../../contexts/ViewportProvider';
import { NavLink, Outlet } from "react-router-dom";



const MyNavLink = React.forwardRef<any, any>((props, ref) => (
  <NavLink
    ref={ref}
    to={props.to}
    className={({ isActive }) =>
      `${props.className} ${isActive ? props.activeClassName : ""}`
    }
    end
  >
    {props.children}
  </NavLink>
));



interface ChatProps {
  name:string,
}




const ChatNotificationBox = (props:ChatProps) =>{
    const [openChat, isOpenChat] = useState<boolean>(false);

    const {name} = props;


    const {width}  = useContext(viewportContext);

    if(!width){
      return <></>
    }
  
    const modal_component_show_breakpoint = 900;


    const modalClickHandler=()=>{
      isOpenChat(true);
    }
  
    // event: React.SyntheticEvent | Event, reason?: string

    const chatCloseHandler = ()=>{
      // if(reason==='clickaway'){
      //   return;
      // }
      isOpenChat(false);
    }

    
    const showModalComponent = width > modal_component_show_breakpoint && <ChatModal openChat={openChat}
     chatCloseHandler={chatCloseHandler} name={name}/>
  
    
     const navprops = width < modal_component_show_breakpoint ? true : false;
  
    
  
      return(
        <>
          <Box
          component={navprops === true ? NavLink : Button}
          to='jhondoe'
          sx={{
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            justifyContent:'space-between',
            alignItems: "flex-start",
            p:1,
            width:'100%',
            textDecoration:'none'
          }}
          onClick={modalClickHandler}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Box pl={1}  width="95%" display='flex' flexDirection='column' justifyContent='flex-start' alignItems='flex-start'>
          <Typography color="#515365" fontSize="14px" fontWeight='bold' textTransform='none'>
            {name}
          </Typography>
          <Typography color='#959ab5' fontSize="14px" textTransform='none'>
            Hey wyd, you up? Wanna ...
          </Typography>
          </Box>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
          </Box>
          {showModalComponent}
          {navprops && <Outlet/>}
          </>
      )
  }

  export default ChatNotificationBox;