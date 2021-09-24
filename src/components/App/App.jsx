import React, { useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from 'Components/Nav';
import SideDrawerComponent from 'Components/SideDrawer/SideDrawer.component';
import Backdrop from 'Components/Backdrop/Backdrop';
import Routes from './Routes';

export const mapStateToProps = (state) => ({
  isLoggedIn: state.AdminReducer.isLoggedIn,
});

export const mapDispatchToProps = () => ({});

export const App = (props) => {
  const { isLoggedIn } = props;
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropToggleClickHandler = () => {
    setSideDrawerOpen(false);
  };

  function renderNavigation() {
    if (!isLoggedIn) {
      return null;
    }

    let backdrop;

    if (sideDrawerOpen) {
      backdrop = <Backdrop onClick={backdropToggleClickHandler} />;
    }

    return (
      <>
        <Nav drawerClickHandler={drawerToggleClickHandler} />
        <SideDrawerComponent show={sideDrawerOpen} onCloseClick={backdropToggleClickHandler} />
        { backdrop }
      </>
    );
  }

  return (
    <Router>
      <div className={`Container-Wrapper-${isLoggedIn === true ? 'isOpen' : 'isClosed'}`}>
        { renderNavigation() }
        <div className="MainContent">
          <Switch>
            <Routes />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
