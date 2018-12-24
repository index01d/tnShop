import { matchPath } from 'react-router-dom';
import { parse } from 'qs';

import prepareData from 'helpers/prepareData';
import createBrowserHistory from 'history/createBrowserHistory';

export const historyCb = (store, routes, location) => {
  const state = { params: {}, query: {}, routes: [] };

  routes.some((route) => {
    const match = matchPath(location.pathname, route);

    if (match) {
      state.routes.push(route);
      Object.assign(state.params, match.params);
      Object.assign(state.query, parse(location.search.substr(1)));
    }

    return match;
  });

  prepareData(store, state);
};

export default  createBrowserHistory();