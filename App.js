// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';

import store from './app/config/store';
import HomeScreen from './app/screens/HomeScreen';
import DetailsScreen from './app/screens/DetailsScreen';

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
},
{
  initialRouteName: 'Home',
  /* The header config from HomeScreen is now here */
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    dispatch: store.dispatch,
  },
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <Provider store={store}><RootStack /></Provider>;
  }
}
