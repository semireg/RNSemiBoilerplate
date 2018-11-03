// @flow

import React, { Component } from 'react';
import {
  Button, StyleSheet, Text, View,
} from 'react-native';
import { NavigationScreenProps, NavigationEvents, NavigationScreenConfig } from 'react-navigation';

type Props = NavigationScreenProps & {
  count: number,
  itemId: number
};

class Home extends Component<Props> {
  static navigationOptions: NavigationScreenConfig = ({ navigation, navigationOptions }) => ({
    title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    /* These values are used instead of the shared configuration! */
    headerStyle: {
      backgroundColor: navigationOptions.headerTintColor,
    },
    headerTintColor: navigationOptions.headerStyle.backgroundColor,
  });

  render() {
    const {
      count,
      itemId,
      otherParam,
      navigation,
    } = this.props;

    return (
      <View style={styles.container}>
        <NavigationEvents
          onWillFocus={payload => console.log('will focus', payload)}
          onDidFocus={payload => console.log('did focus', payload)}
          onWillBlur={payload => console.log('will blur', payload)}
          onDidBlur={payload => console.log('did blur', payload)}
        />
        <Text>
          {`Count ${count}`}
        </Text>
        <Text>
          {`ItemID ${itemId}`}
        </Text>
        <Text>
          {`otherParam ${otherParam}`}
        </Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title="Go back!"
          onPress={() => navigation.goBack()}
        />
        <Button
          title="Update the title"
          onPress={() => navigation.setParams({ otherParam: 'Updated!' })}
        />
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
