// @flow

import { ADD, SUB } from './actionTypes';

export function add() {
  return ({
    type: ADD,
    payload: { },
  });
}

export const sub = () => ({
  type: SUB,
  payload: { },
});
