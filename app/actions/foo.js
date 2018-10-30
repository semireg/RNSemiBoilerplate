// @flow

import { ADD, ADD_WITH_AMOUNT, SUB } from './actionTypes';
import {
  type BaseAction, type ThunkAction,
} from '../config/types';

export function add() {
  return ({
    type: ADD,
    payload: { },
  });
}

export function sub() {
  return {
    type: SUB,
    payload: { },
  };
}

export function addWithAmount(amount: number): BaseAction {
  return {
    type: ADD_WITH_AMOUNT,
    payload: amount,
  };
}

export function delayedChange(amount: number): ThunkAction {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addWithAmount(amount));
    }, 1000);
  };
}
