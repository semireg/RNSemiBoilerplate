// @flow

// Unsure why this is not resolving properly.
import { useScreens } from 'react-native-screens'; // eslint-disable-line import/no-unresolved

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

useScreens();

AppRegistry.registerComponent(appName, () => App);
