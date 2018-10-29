// @flow
// @format

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from '../components/Home';
import * as FooActions from '../actions/foo';
import type { AppState } from '../config/types';

const mapStateToProps = (state: AppState) => ({
  count: state.foo.count,
});

function mapDispatchToProps(dispatch: any) {
  console.log(`FooActions: ${JSON.stringify(FooActions)}`);
  return bindActionCreators(FooActions, dispatch); // eslint-disable-line flowtype/no-weak-types
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
