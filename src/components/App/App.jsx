import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateHelloWorld } from 'Store/Test/Test.action';
import Routes from './Routes';

export const mapStateToProps = () => ({});

export const mapDispatchToProps = (dispatch) => ({
  updateHW: (lol) => dispatch(updateHelloWorld(lol)),
});

export const App = () => (
  <Router>
    <Switch>
      <Routes />
    </Switch>
  </Router>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
