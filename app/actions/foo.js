// @flow

import { ADD, ADD_WITH_AMOUNT, SUB } from './actionTypes';

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

export const addWithAmount = (amount: number) => ({
  type: ADD_WITH_AMOUNT,
  payload: amount,
});

export const delayedChange = (amount: number) => (dispatch: any) => {
  setTimeout(() => {
    dispatch(addWithAmount(amount));
  }, 1000);
};
