// @flow

import { type Action } from 'redux';

import { ADD, SUB, ADD_WITH_AMOUNT } from '../actions/actionTypes';
import type { FooState } from '../config/types';

const initialState: FooState = {
  count: 99,
};

export default function (state: FooState = initialState, action: Action) {
  switch (action.type) {
    case ADD: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case SUB: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    case ADD_WITH_AMOUNT: {
      return {
        ...state,
        count: state.count + action.payload,
      };
    }
    default:
      return state;
  }
}
