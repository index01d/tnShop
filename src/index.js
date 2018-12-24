import React from 'react';

import ReactDOM from 'react-dom';

import App from './App';

import history, { historyCb } from 'helpers/history';
import routes from 'routes';
import createStore from 'store';

const store = createStore(window.INITIAL_STATE);

history.listen((location) => historyCb(store, routes, location));

ReactDOM.hydrate(
  <App history={history} store={store} />,
  document.getElementById('root'),
  () => {
    delete window.INITIAL_STATE;
  }
);