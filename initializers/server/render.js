import React from 'react';
import { renderToString } from 'react-dom/server';

import App from 'App';

import createStore from 'store';
import routes from 'routes';
import { historyCb } from 'helpers/history';

import Helmet from 'react-helmet';

export default (req, res) => {
  const store = createStore();

  return historyCb(store, routes, { pathname: req.url, query: req.query })
    .then(() => {
      const context = {};
      return {
        content: renderToString(<App store={store} location={req.url} context={context} />),
        initialState: store.getState(),
        helmet: Helmet.renderStatic()
      };
    })
    .catch((e) => console.log('Fatal', e));
};
