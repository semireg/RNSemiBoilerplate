// @flow

import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, Image, Button,
} from 'react-native';

import { colors } from '../config/styles';

const instructions = Platform.select({
  ios: 'ios',
  android: 'android',
});

type Props = {
  add: () => void,
  sub: () => void,
  delayedChange: (number) => void,
  count: number
};

class Home extends Component<Props> {
  render() {
    const {
      add, sub, delayedChange, count,
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
