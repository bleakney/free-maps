// import dependencies
import * as React from 'react';

// import components
import Map from './components/Map';
import Header from './components/Header';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <div className="app-container">
       <Header className="header" />
      <Map />
    </div>
    </ThemeProvider>
  );
}

export default App;
