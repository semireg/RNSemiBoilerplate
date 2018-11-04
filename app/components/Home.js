// @flow

import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, Image, Button,
} from 'react-native';
import { NavigationScreenProps, NavigationScreenConfig } from 'react-navigation';
import HeaderButtons, { Item } from 'react-navigation-header-buttons';

import { colors } from '../config/styles';
import Logo from './Logo';

const instructions = Platform.select({
  ios: 'ios',
  android: 'android',
});

type Props = NavigationScreenProps & {
  add: () => void,
  sub: () => void,
  delayedChange: (number) => void,
  count: number
};

class Home extends Component<Props> {
  static navigationOptions: NavigationScreenConfig = ({
    navigation, add, sub,
  }) => {
    const onAdd = () => {
      if (add) {
        add();
      }
    };
    const onSub = () => {
      if (sub) {
        sub();
      }
    };

    return {
      title: 'Home',
      headerTitle: <Logo />,
      headerRight: (
        <HeaderButtons>
          <Item title="Add" onPress={onAdd} />
          <Item title="Sub" onPress={onSub} />
        </HeaderButtons>
      ),
      headerLeft: (
        <HeaderButtons>
          <Item title="Modal" onPress={() => navigation.navigate('MyModal')} />
        </HeaderButtons>
      ),
    };
  };

  componentDidMount = () => {
    const { navigation, add, sub } = this.props;
    navigation.setParams({ add, sub });
  }

  render() {
    const {
      add, sub, delayedChange, count, navigation,
    } = this.props;

    const pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    };

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Count:
          {count}
        </Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button title="Add" onPress={add} />
        <Button title="Sub" onPress={sub} />
        <Button title="Delayed +10" onPress={() => delayedChange(10)} />
        <Button
          title="Go to Details 2"
          onPress={() => navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })}
        />
        <Image source={pic} style={styles.image} />
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: colors.gray,
    marginBottom: 5,
  },
  image: { width: 193, height: 110 },
});
