import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { initializeFirebase } from 'Utils/Firebase/Firebase';
import store from 'Store/index';

import App from 'Components/App/App';

import 'Style/index.scss';

initializeFirebase();

if (module.hot) module.hot.accept();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
