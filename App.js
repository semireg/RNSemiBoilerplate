// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './app/config/store';
import HomeScreen from './app/screens/HomeScreen';

type Props = {};
class App extends Component<Props> {
  render = () => <Provider store={store}><HomeScreen /></Provider>
}

export default App;
