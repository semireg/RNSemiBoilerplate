// @flow
// @format

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Platform, StyleSheet, Text, View, Image, Button,
} from 'react-native';

import { colors } from '../config/styles';
import * as FooActions from '../actions/foo';
import type { AppState } from '../config/types';

const instructions = Platform.select({
  ios: 'ios',
  android: 'android',
});

type Props = {add: () => void, sub: () => void, count: number};

type FooType = {| blah: boolean |};
const mine: FooType = { blah: true };
const test = (stuff: FooType): boolean => !stuff.blah;

class Home extends Component<Props> {
  render() {
    const { add, sub, count } = this.props;

    const pic = {
      uri:
      'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
Welcome to React!
          {count}
          {test(mine) ? ' YES' : ' no'}
        </Text>
        <Text style={styles.instructions}>Yep 1</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button title="Add" onPress={add} />
        <Button title="Sub" onPress={sub} />
        <Image source={pic} style={styles.image} />
      </View>
    );
  }
}

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
