/* globals __CLIENT__, __SERVER__ */
import React from 'react';

import { Provider } from 'react-redux';

import { Router, Switch, Route } from 'react-router-dom';

import MainLayout from 'components/layouts/Main';
import routes from 'routes';

import './App.css';

const RouteWithSubRoutes = ({ name, ...route }) => (
  <Route {...route} key={name} />
);

const AppRouter = ({ history, children, location, context }) => {
  if (__CLIENT__)
    return (
      <Router history={history}>{children}</Router>
    );

  if (__SERVER__)
    return (
      <StaticRouter location={location} context={context}>{children}</StaticRouter>
    );
};

const App = ({ history, store, location, context }) => (
  <Provider store={store}>
    <AppRouter history={history} context={context} location={location}>
      <MainLayout>
        <Switch>
          {routes.map((route) => RouteWithSubRoutes(route))}
        </Switch>
      </MainLayout>
    </AppRouter>
  </Provider>
);

export default App;