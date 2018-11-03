// @flow

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withMappedNavigationProps } from 'react-navigation-props-mapper';
import { compose } from 'recompose';

import Details from '../components/Details';
import { AppStateRecord, type Dispatch } from '../config/types';

const mapStateToProps = (state: AppStateRecord) => ({
  count: state.getIn(['foo', 'count']),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators([], dispatch);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withMappedNavigationProps(),
)(Details);
