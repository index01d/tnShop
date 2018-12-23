import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import reducers from '~/src/reducers';

import APIMiddleware from '~/src/middleware/API'; 

export default function () {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    combineReducers(reducers), 
    composeEnhancers(applyMiddleware(APIMiddleware))
  );
}