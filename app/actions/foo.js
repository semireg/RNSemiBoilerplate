// @flow

import { ADD, ADD_WITH_AMOUNT, SUB } from './actionTypes';
import type { Dispatch, BaseAction, ThunkAction } from '../config/types';

export function add() {
  return ({
    type: ADD,
    payload: { },
  });
}

export const sub = (): BaseAction => ({
  type: SUB,
  payload: { },
});

export const addWithAmount = (amount: number): BaseAction => ({
  type: ADD_WITH_AMOUNT,
  payload: amount,
});

export const delayedChange = (amount: number): ThunkAction => (dispatch: Dispatch) => {
  setTimeout(() => {
    dispatch(addWithAmount(amount));
  }, 1000);
};
