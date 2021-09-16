import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Routes from './Routes';

export const mapStateToProps = () => ({});

export const mapDispatchToProps = () => ({});

export const App = () => (
  <Router>
    <Switch>
      <Routes />
    </Switch>
  </Router>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
