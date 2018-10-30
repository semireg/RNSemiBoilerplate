// @flow

import { type BaseAction } from '../config/types';

// eslint-disable-next-line import/prefer-default-export
export function createReducer<T>(initialState: ?T, handlers: {}) {
  return (state: ?T = initialState, action: BaseAction) => (Object.prototype.hasOwnProperty.call(handlers, action.type)
    ? handlers[action.type](state, action)
    : state);
}
