// @flow

import { ADD, SUB } from '../actions/actionTypes';
// import { type FooState } from '../config/types';

const initialState: any = {
  count: 99,
};

export default function (state: any = initialState, action: any) {
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
    default:
      return state;
  }
}
