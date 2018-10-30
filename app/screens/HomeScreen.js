// @flow

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from '../components/Home';
import * as FooActions from '../actions/foo';
import { AppStateRecord, type Dispatch } from '../config/types';

const mapStateToProps = (state: AppStateRecord) => ({
  count: state.getIn(['foo', 'count']),
});

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(FooActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
