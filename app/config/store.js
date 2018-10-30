// @flow

import { createStore, compose, applyMiddleware } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools'; // eslint-disable-line
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const devToolsCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; // eslint-disable-line
const composer = devToolsCompose || compose;

const store = createStore(
  rootReducer,
  {},
  composer(applyMiddleware(thunk)),
);

export default store;
