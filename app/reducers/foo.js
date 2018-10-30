// @flow

import { createReducer } from '../helpers/redux';
import * as Action from '../actions/actionTypes';
import { FooStateRecord } from '../config/types';

type WithAmountActionType = { payload: number };

const handlers = {
  [Action.ADD]: (state: FooStateRecord) => state.update('count', (count: number) => count + 1),
  [Action.SUB]: (state: FooStateRecord) => state.update('count', (count: number) => count - 1),
  [Action.ADD_WITH_AMOUNT]: (state: FooStateRecord, action: WithAmountActionType) => state.update('count', (count: number) => count + action.payload),
};

const defaultState = FooStateRecord();
const foo = createReducer(defaultState, handlers);

export default foo;
