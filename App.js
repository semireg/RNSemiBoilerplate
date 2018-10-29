/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './app/config/store';
import Home from './app/screens/Home';

type Props = {};
class App extends Component<Props> {
  render = () => <Provider store={store}><Home /></Provider>
}

export default App;
