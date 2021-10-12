// import dependencies
import React, { useEffect } from 'react';
import WebFont from 'webfontloader';
import './index.scss';

// import components
import Map from './components/Map';
import Header from './components/Header';

//footer components
import Footer from './components/Footer';
import '../src/components/Footer/style.css'


function App() {
  // import google fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Playfair Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900', 'Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900']
      }
    })
  })
  return (
    <div className="app-container">
       <Header className="header" />
      <Map />
      <Footer/>
    </div>
  );
}

export default App;
