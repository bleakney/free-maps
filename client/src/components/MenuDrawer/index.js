import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider';

const drawerWidth = "30vw";


function MenuDrawer(props) {
    const {
        openDrawer,
        setDrawerOpen
    } = props;
    const handleDrawerClose = () => setDrawerOpen(false);

    return (
    <Drawer 
    sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
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
        <Divider />
        
    </Drawer>
    )
}

export default MenuDrawer;