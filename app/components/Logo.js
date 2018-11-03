// @flow


import React, { Component } from 'react';
import {
  StyleSheet, Image,
} from 'react-native';

import semiregBare from '../img/semireg-bare.png';

type Props = {};

class Logo extends Component<Props> {
  render = () => <Image source={semiregBare} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    marginHorizontal: 10,
  },
});

export default Logo;
