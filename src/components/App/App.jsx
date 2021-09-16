import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from 'Components/Nav';
import Routes from './Routes';

export const mapStateToProps = (state) => ({
  email: state.AdminReducer.email,
});

export const mapDispatchToProps = () => ({});

export const App = (props) => {
  const { email } = props;

  return (
    <Router>
      <div className="Container-Wrapper" style={window.location.pathname !== '/auth' ? { display: 'grid' } : { display: 'block' }}>
        <div className="Navigation" style={window.location.pathname !== '/auth' ? { display: 'block' } : { display: 'none' }}>
          <Nav />
        </div>
        <div className="MainContent">
          <Switch>
            <Routes email={email} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
