// @flow

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withMappedNavigationAndConfigProps } from 'react-navigation-props-mapper';
import { compose } from 'recompose';

import Home from '../components/Home';
import * as FooActions from '../actions/foo';
import { AppStateRecord, type Dispatch } from '../config/types';

const mapStateToProps = (state: AppStateRecord) => ({
  count: state.getIn(['foo', 'count']),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(FooActions, dispatch);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withMappedNavigationAndConfigProps(),
)(Home);
