import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalUnstyled from "@mui/core/ModalUnstyled";
import { styled, Box } from "@mui/system";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuDrawer from "../MenuDrawer";
import Auth from "../../utils/auth";

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

  const Backdrop = styled("div")`
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
    bgcolor: "rgb(194, 228, 255)",
    p: 2,
    px: 4,
    pb: 3,
    borderRadius: 3,
  };

  // set login modal visibility state
  const [openLogin, setLoginOpen] = useState(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);
  // set signup modal visibility state
  const [openSignup, setSignupOpen] = useState(false);
  const handleSignupOpen = () => setSignupOpen(true);
  const handleSignupClose = () => setSignupOpen(false);
  // set drawer visibility state
  const [openDrawer, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => setDrawerOpen(true);

  function showNavigation() {
    if (Auth.loggedIn()) {
        return (
          <button
                    className="nav-link logout-btn"
                    type="button"
                    onClick={Auth.logout}
                  >
                    logout
                  </button>
        );
    } else {
      return (
        <>
          <button className="nav-link" type="button" onClick={handleLoginOpen}>
            Sign In
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
            New User
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
        </>
      );
    }
  }

  return (
    <header>
      <nav>
        <div className="navbar">
          <div className="nav-left">
            <IconButton onClick={handleDrawerOpen}>
              <MenuIcon sx={{ color: "rgb(191, 171, 171)" }} />
            </IconButton>
            <Link to="/map">
              <h4 className="nav-title">Free Maps</h4>
            </Link>
          </div>
          <div className="nav-list">{showNavigation()}</div>
        </div>
      </nav>
      <MenuDrawer
        variant="persistent"
        anchor="left"
        openDrawer={openDrawer}
        setDrawerOpen={setDrawerOpen}
      />
    </header>
  );
}

export default Header;
