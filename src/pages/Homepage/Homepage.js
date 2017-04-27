import React, { Component } from 'react';
import { Button, View } from 'react-native';

import { NOPAText, NOPAButton } from '../../common/index';

import styles from './styles';

class Homepage extends Component {
  static navigationOptions = {
    title: 'Homepage',
  }

  render() {
    return (
      <View style={styles.container}>
        <NOPAText
          fontSize={30}
          textStyle={styles.textStyle}
        >NOPA</NOPAText>
        <NOPAText
          fontSize={25}
          textStyle={styles.textStyle}
        >
          Welcome to Zopa connect
        </NOPAText>
        <NOPAText
          fontSize={20}
          textStyle={styles.textStyle}
        >
          Keep track of all your expenses by connecting as many bank accounts as you’d like to your Zopa app
        </NOPAText>

        {/*<NOPAButton*/}
          {/*title="Select your fake bank account"*/}
          {/*onPress={() => console.log('pressed')}*/}
        {/*/>*/}

      </View>
    );
  };
}

export default Homepage;
