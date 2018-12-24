import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import reducers from 'reducers';

import APIMiddleware from 'middleware/API'; 

export default function () {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    combineReducers(reducers), 
    composeEnhancers(applyMiddleware(APIMiddleware))
  );
}