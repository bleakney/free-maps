import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';

function Header() {
    return (
        <Box sk={{ flexGrow: 1 }}>
            <AppBar position='sticky'>
                <Toolbar>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="navigation menu"
                    sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        treasure maps
                    </Typography>
                    <Button>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
};

export default Header;