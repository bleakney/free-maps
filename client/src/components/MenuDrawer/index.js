import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


const drawerWidth = "30vw";
const tabStyles = {
    color: "rgb(239, 235, 239)",
    "& span": {
        color: "rgb(191, 171, 171)!important"
    }
}


function MenuDrawer(props) {
    // import useState function to toggle drawer visibility
    const {
        openDrawer,
        setDrawerOpen
    } = props;
    const handleDrawerClose = () => setDrawerOpen(false);

    // toggle Tabs
    const [tabValue, setTabValue] = useState('1');
    const handleChange = (event, newValue) => setTabValue(newValue);

    return (
        <div className="drawer-container">
    <Drawer 
    sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: 'rgb(194, 228, 255)'
        },
    }}
    variant="persistent"
    anchor="left"
    open={openDrawer}
    >
        <div className="drawer-header">
            <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
            </IconButton>
       </div>
        <Box sx={{ width: '100%'}}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <div className="tablist-container">
          <TabList onChange={handleChange} aria-label="Pin descriptions" >
            <Tab label="View All" value="1" sx={tabStyles} />
            <Tab label="Your Pins" value="2" sx={tabStyles} />
            <Tab label="Saved Pins" value="3" sx={tabStyles} />
          </TabList>
          
          </div>
        </Box>
        {/* maybe use map function here */}
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
        <Divider />

    </Drawer>
    </div>
    )
}

export default MenuDrawer;