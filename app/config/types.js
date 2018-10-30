// @flow

import type {
  Dispatch as ReduxDispatch,
  Store as ReduxStore,
} from 'redux';

import {
  Record, type RecordFactory,
} from 'immutable';

// Without this line, error: Uncaught SyntaxError: Unexpected Identifier, RCTFatal
// Interestingly, it can not recover until `react-native run-ios` is re-run.
export const BrokenTypeExportHack = 'BrokenTypeExportHack'; // eslint-disable-line

// App States
export type FooStateValues = {
  count: number
};
export const FooStateRecord: RecordFactory<FooStateValues> = Record({
  count: 0,
});

export type AppStateValues = {
  foo: FooStateRecord
};
export const AppStateRecord: RecordFactory<AppStateValues> = Record({
  foo: new FooStateRecord(),
});

// Redux
export type BaseAction = { +type: string };
export type GetState = () => AppStateRecord;
// eslint-disable-next-line flowtype/no-weak-types
export type ThunkAction = (dispatch: ReduxDispatch<any>, getState: GetState) => any;
export type Store = ReduxStore<AppStateRecord, BaseAction>;
export type Dispatch = ReduxDispatch<BaseAction>;
