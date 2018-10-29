// @flow

import { createStore, compose } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools'; // eslint-disable-line

import rootReducer from '../reducers';

const devToolsCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; // eslint-disable-line
const composer = devToolsCompose ? devToolsCompose() : compose;

const store = createStore(
  rootReducer,
  {},
  composer,
);

export default store;
