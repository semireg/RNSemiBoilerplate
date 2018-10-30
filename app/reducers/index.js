// @flow

import { combineReducers } from 'redux-immutable';
import foo from './foo';
import { AppStateRecord } from '../config/types';

const rootReducer = combineReducers({
  foo,
}, AppStateRecord);

export default rootReducer;
