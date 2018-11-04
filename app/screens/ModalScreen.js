// @flow

import React, { Component } from 'react';
import {
  Text, View, Button, StyleSheet,
} from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

type Props = NavigationScreenProps & {};

class ModalScreen extends Component<Props> {
  render() {
    const { navigation } = this.props;

    const dismiss = () => {
      console.log(`navigation: ${navigation}`);
      navigation.navigate('Main');
    };
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is a modal!</Text>
        <Button
          onPress={dismiss}
          title="Dismiss"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 30 },
});

export default ModalScreen;
