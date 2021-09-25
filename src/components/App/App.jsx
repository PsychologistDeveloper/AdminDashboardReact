import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from 'Components/Nav';
import SideDrawerComponent from 'Components/SideDrawer/SideDrawer.component';
import Routes from './Routes';

export const mapStateToProps = (state) => ({
  isLoggedIn: state.AdminReducer.isLoggedIn,
  admin: state.AdminReducer.admin,
  isActiveMobileNavigation: state.PopupReducer.isActiveMobileNavigation,
});

export const mapDispatchToProps = () => ({});

export const App = (props) => {
  const { isLoggedIn, admin, isActiveMobileNavigation } = props;

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
