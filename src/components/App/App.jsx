import React from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';

import { updateHelloWorld } from 'Store/Test/Test.action';

export const mapStateToProps = () => ({});

export const mapDispatchToProps = (dispatch) => ({
  updateHW: (lol) => dispatch(updateHelloWorld(lol)),
});

const App = (props) => {
  const { updateHW } = props;

  updateHW('azazaza');

  return (
    <Button variant="contained" onClick={() => console.log(12321)}>
      HELLO WORLD
    </Button>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
