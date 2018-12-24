import React from 'react';

import { Provider } from 'react-redux';

import { Router, Switch, Route } from 'react-router-dom';

import MainLayout from 'components/layouts/Main';
import history, { historyCb } from 'helpers/history';
import routes from 'routes';
import createStore from 'store';

import './App.css';

const store = createStore();

history.listen((location) => historyCb(store, routes, location));
historyCb(store, routes, location);

const RouteWithSubRoutes = ({ name, ...route }) => (
  <Route {...route} key={name} />
);

const AppRouter = ({ history, children }) => (
  <Router history={history}>{children}</Router>
);

const App = ({ location }) => (
  <Provider store={store}>
    <AppRouter history={history} location={location}>
      <MainLayout>
        <Switch>
          {routes.map((route) => RouteWithSubRoutes(route))}
        </Switch>
      </MainLayout>
    </AppRouter>
  </Provider>
);

export default App;