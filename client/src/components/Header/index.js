import * as React from 'react';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import {css} from '@emotion/react';

function Header(props) {
    return (
        <header>
            <nav>
                <div className="navbar">
                {/* <IconButton>
                    <MenuIcon />
                </IconButton> */}
                <h4 className="nav-title">freesource maps</h4>
                <div className="nav-list">
                    <span className="nav-link">
                        sign in
                    </span>
                    <span className="nav-link nav-signup">
                        new user
                    </span>

                </div>
                </div>
            </nav>
        </header>
    )
};

export default Header;