import React, { useContext } from "react";

//mui components
import { Paper, Box } from "@mui/material";
import Typography from "@mui/material/Typography";

//asssets
import { IconButton } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";

import jhondoe from '../assets/jhondoe.png';

//context
import { viewportContext } from "../contexts/ViewportProvider";

//custom classes
import classes from "./styles/Notifications.module.css";

const Notifications = () => {
  const { width } = useContext(viewportContext);

  if (!width) {
    return <></>;
  }

  const mobile_max_breakpoint = 900;


  return (
    <Paper
      sx={{
        width: "100%",
        height: {md:'60vh', xs:'100%'},
        mt:{md:0,xs:-2,},
        backgroundColor: "ffff",
        boxShadow: "none",
        border: "1px solid #ede9e9",
        borderRadius: 2,
        
      }}
    >
      <Box
        sx={{
          width: "100%",
          p: 1,
          borderBottom: "1px solid #ede9e9",
          pt: 1.5,
          pb: 1.5,
          
        }}
      >
        <Typography
          color="#515365"
          fontSize="16px"
          fontWeight="bold"
          letterSpacing={0.3}
          width="100%"
        >
          Notifications
        </Typography>
      </Box>




      <Box sx={{ width:'100%', height:'85%',overflowY: "auto"}} className={classes.disable_scrollbar}>
       
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            p: 1,
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Typography color="#515365" fontSize="14px" width="95%" pl={1}>
            Jhon doe liked your post
          </Typography>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            p: 1,
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Typography color="#515365" fontSize="14px" width="95%" pl={1}>
            Jhon doe liked your post
          </Typography>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            p: 1,
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Typography color="#515365" fontSize="14px" width="95%" pl={1}>
            Jhon doe liked your post
          </Typography>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            p: 1,
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Typography color="#515365" fontSize="14px" width="95%" pl={1}>
            Jhon doe liked your post
          </Typography>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            p: 1,
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Typography color="#515365" fontSize="14px" width="95%" pl={1}>
            Jhon doe liked your post
          </Typography>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            p: 1,
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Typography color="#515365" fontSize="14px" width="95%" pl={1}>
            Jhon doe liked your post
          </Typography>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            p: 1,
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Typography color="#515365" fontSize="14px" width="95%" pl={1}>
            Jhon doe liked your post
          </Typography>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            p: 1,
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Typography color="#515365" fontSize="14px" width="95%" pl={1}>
            Jhon doe liked your post
          </Typography>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            p: 1,
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Typography color="#515365" fontSize="14px" width="95%" pl={1}>
            Jhon doe liked your post
          </Typography>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            p: 1,
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Typography color="#515365" fontSize="14px" width="95%" pl={1}>
            Jhon doe liked your post
          </Typography>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            p: 1,
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Typography color="#515365" fontSize="14px" width="95%" pl={1}>
            Jhon doe liked your post
          </Typography>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            p: 1,
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Typography color="#515365" fontSize="14px" width="95%" pl={1}>
            Jhon doe liked your post
          </Typography>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            p: 1,
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Typography color="#515365" fontSize="14px" width="95%" pl={1}>
            Jhon doe liked your post
          </Typography>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            p: 1,
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Typography color="#515365" fontSize="14px" width="95%" pl={1}>
            Jhon doe liked your post
          </Typography>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            p: 1,
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Typography color="#515365" fontSize="14px" width="95%" pl={1}>
            Jhon doe liked your post
          </Typography>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            p: 1,
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Typography color="#515365" fontSize="14px" width="95%" pl={1}>
            Jhon doe liked your post
          </Typography>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            p: 1,
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Typography color="#515365" fontSize="14px" width="95%" pl={1}>
            Jhon doe liked your post
          </Typography>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            p: 1,
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Typography color="#515365" fontSize="14px" width="95%" pl={1}>
            Jhon doe liked your post
          </Typography>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            p: 1,
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Typography color="#515365" fontSize="14px" width="95%" pl={1}>
            Jhon doe liked your post
          </Typography>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            p: 1,
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Typography color="#515365" fontSize="14px" width="95%" pl={1}>
            Jhon doe liked your post
          </Typography>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            p: 1,
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Typography color="#515365" fontSize="14px" width="95%" pl={1}>
            Jhon doe liked your post
          </Typography>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            p: 1,
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Typography color="#515365" fontSize="14px" width="95%" pl={1}>
            Jhon doe liked your post
          </Typography>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            p: 1,
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Typography color="#515365" fontSize="14px" width="95%" pl={1}>
            Jhon doe liked your post
          </Typography>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            p: 1,
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Typography color="#515365" fontSize="14px" width="95%" pl={1}>
            Jhon doe liked your post
          </Typography>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            p: 1,
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Typography color="#515365" fontSize="14px" width="95%" pl={1}>
            Jhon doe liked your post
          </Typography>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            p: 1,
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Typography color="#515365" fontSize="14px" width="95%" pl={1}>
            Jhon doe liked your post
          </Typography>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            p: 1,
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Typography color="#515365" fontSize="14px" width="95%" pl={1}>
            Jhon doe liked your post
          </Typography>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            p: 1,
            borderBottom: "1px solid #ede9e9",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Avatar
            src={jhondoe}
            variant="circular"
            sx={{
              width: { lg: "35px", md: "20px" },
              height: { lg: "35px", md: "20px" },
            }}
          ></Avatar>
          <Typography color="#515365" fontSize="14px" width="95%" pl={1}>
            Jhon doe liked your post
          </Typography>
          <Typography color="#959ab5" fontSize="10px">
            2 min ago
          </Typography>
        </Box>
        <Box
          sx={{
            width: {md:'95%', xs:'100%'},
            height:{md:5,xs:'70px'},
          }}
        >
        </Box>
       
      </Box>
      
    </Paper>
  );
};

export default Notifications;
