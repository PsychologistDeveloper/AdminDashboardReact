import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Nav from 'Components/Nav';
import SideDrawerComponent from 'Components/SideDrawer';
import { setIsMobile } from 'Store/Device/Device.action';
import { throttle } from 'Utils/DebounceAndThrottle';
import { getPsychotypes } from 'Store/PsychoTypes/PsychoTypes.dispatcher';

import Routes from './Routes';

export const mapStateToProps = (state) => ({
  isLoggedIn: state.AdminReducer.isLoggedIn,
  admin: state.AdminReducer.admin,
  isActiveMobileNavigation: state.PopupReducer.isActiveMobileNavigation,
});

export const mapDispatchToProps = (dispatch) => ({
  init: async () => {
    getPsychotypes(dispatch);
  },
  setIsMobile: (isMobile) => dispatch(setIsMobile(isMobile)),
});

export const App = (props) => {
  const {
    setIsMobile,
    isLoggedIn,
    admin,
    isActiveMobileNavigation,
    init,
  } = props;

  useEffect(() => {
    window.addEventListener('resize', throttle(onResize, 200));
    init();

    return () => {
      window.addEventListener('resize', throttle(onResize, 200));
    };
  }, []);

  function onResize(e) {
    const windowWidth = e.target.innerWidth;
    const newIsMobile = windowWidth < 769;
    setIsMobile(newIsMobile);
  }

  function renderNavigation() {
    if (!isLoggedIn) {
      return null;
    }

    return (
      <>
        <Nav admin={admin} />
        <SideDrawerComponent />
      </>
    );
  }

  return (
    <Router>
      <div className={`Container-Wrapper-${isLoggedIn === true ? 'isOpen' : 'isClosed'}`}>
        { renderNavigation() }
        <div className={`MainContent ${isActiveMobileNavigation ? 'isOpen' : ''}`}>
          <Switch>
            <Routes />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
