// @flow

import type {
  Dispatch as ReduxDispatch,
  Store as ReduxStore,
} from 'redux';

// Without this line, error: Uncaught SyntaxError: Unexpected Identifier, RCTFatal
// Interestingly, it can not recover until `react-native run-ios` is re-run.
export const BrokenTypeExportHack = 'BrokenTypeExportHack'; // eslint-disable-line

export type FooState = {
  count: number
};

export type AppState = {
  foo: FooState
};

// Redux
export type BaseAction = { +type: string };
export type GetState = () => AppState;
// eslint-disable-next-line flowtype/no-weak-types
export type ThunkAction = (dispatch: ReduxDispatch<any>, getState: GetState) => any;
export type Store = ReduxStore<AppState, BaseAction>;
export type Dispatch = ReduxDispatch<BaseAction>;
