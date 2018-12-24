import React from 'react';

import ReactDOM from 'react-dom';

import App from './App';

import history, { historyCb } from 'helpers/history';
import routes from 'routes';
import createStore from 'store';

const store = createStore();

history.listen((location) => historyCb(store, routes, location));
historyCb(store, routes, location);

ReactDOM.render(
  <App history={history} store={store} />,
  document.getElementById('root')
);