// @flow

// Without this line, error: Uncaught SyntaxError: Unexpected Identifier, RCTFatal
// Interestingly, it can not recover until `react-native run-ios` is re-run.
export const BrokenTypeExportHack = 'BrokenTypeExportHack'; // eslint-disable-line

export type FooState = {
  count: number
};

export type AppState = {
  foo: FooState
};
