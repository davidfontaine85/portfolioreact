import React, { Component } from 'react';
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Frame from './Components/Frame';
import Footer from './Components/Footer';
import HeaderMobile from './Components/HeaderMobile';
import NavigationMobile from './Components/NavigationMobile';
import FrameMobile from './Components/FrameMobile';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/App.css';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}


class App  extends Component {
  render() {
    return <div className="App">
      <Desktop>
        <Header />
        <Router>
          <div>
            <Navigation />
            <Frame />
          </div>
        </Router>
        <Footer />
      </Desktop>
      <Mobile>
        <HeaderMobile />
        <Router>
          <div>
            <NavigationMobile />
            <FrameMobile />
          </div>
        </Router>
        <Footer />
      </Mobile>
    </div>
  }
}


export default App;
