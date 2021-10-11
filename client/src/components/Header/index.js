import React, { useState } from 'react';
import ModalUnstyled from '@mui/core/ModalUnstyled'
import { styled, Box } from '@mui/system';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Header(props) {

    const LoginModal = styled(ModalUnstyled)`
    position: fixed;
    z-index: 1300;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

    const SignupModal = styled(ModalUnstyled)`
    position: fixed;
    z-index: 1300;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

    const Backdrop = styled('div')`
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
    `;

    const style = {
        width: "20vw",
        height: "20vw",
        bgcolor: '#efebef',
        p: 2,
        px: 4,
        pb: 3,
        borderRadius: 3,
      };
    
    // set login modal visibility state
    const [openLogin, setOpenLogin] = useState(false);
    const handleLoginOpen = () => setOpenLogin(true);
    const handleLoginClose = () => setOpenLogin(false);
    // set signup modal visibility stat
    const [openSignup, setOpenSignup] = useState(false);
    const handleSignupOpen = () => setOpenSignup(true);
    const handleSignupClose = () => setOpenSignup(false);


    return (
        <header>
            <nav>
                <div className="navbar">
                    <div className="nav-left">
                <IconButton>
                    <MenuIcon sx={{color: 'rgb(191, 171, 171)'}}/>
                </IconButton>
                <h4 className="nav-title">freesource maps</h4>
                </div>
                <div className="nav-list">
                    <button className="nav-link" type="button" onClick={handleLoginOpen}>
                        sign in
                    </button>
                    <LoginModal 
                    open={openLogin}
                    onClose={handleLoginClose}
                    aria-labelledby="login form"
                    BackdropComponent={Backdrop}
                    >
                        <Box sx={style}>
                        <LoginForm />
                        </Box>
                        </LoginModal>
                    <button className="nav-link nav-signup" onClick={handleSignupOpen}>
                        new user
                    </button>
                    <SignupModal
                        open={openSignup}
                        onClose={handleSignupClose}
                        aria-labelledby="signup form"
                        BackdropComponent={Backdrop}
                        >
                        <Box sx={style}>
                            <SignupForm />
                    </Box>
                    </SignupModal>
                </div>
                </div>
            </nav>
        </header>
    )
};

export default Header;