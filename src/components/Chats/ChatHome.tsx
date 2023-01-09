import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { Paper } from "@mui/material";
import ChatFriendsMessages from './ChatFriendsMessages';
import ChatGroupsMessages from './ChatGroupsMessages';
// import TabPanel from '../helpers/Tabpanel';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>
          {children}
          </>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}








const ChatHome = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper
      sx={{
        width: "100%",
        height: {md:'60vh',xs:'100%'},
        backgroundColor: "ffff",
        boxShadow: "none",
        border: "1px solid #ede9e9",
        borderRadius: 2,
       mt:{md:3,xs:-2}
      }}
    >
       <Box sx={{ width: '100%', height:'100%', position:'relative' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="chat tabs"
      >
        <Tab label="Friends" {...a11yProps(0)}  sx={{width:'50%', fontSize:'14px', color:'#515365'}}/>
        <Tab value={1} label="Groups" {...a11yProps(1)}  sx={{width:'50%', fontSize:'14px', color:'#515365'}} />
      </Tabs>
      <TabPanel value={value} index={0} >
        <ChatFriendsMessages/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ChatGroupsMessages/>
      </TabPanel>
    </Box>
    </Paper>
  );
};

export default ChatHome;
