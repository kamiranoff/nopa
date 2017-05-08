import React, { Component } from 'react';
import { Button, View } from 'react-native';

import { NOPAText, NOPAButton } from '../../common/index';
import TitleDescription from '../../components/TitleDescription/TitleDescription';

import styles from './styles';

class Homepage extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <NOPAText
            fontSize={30}
            textStyle={styles.textStyle}
          >NOPA</NOPAText>
          <TitleDescription
            title="Welcome to Zopa connect"
            desc="Keep track of all your expenses by connecting as many bank accounts as you’d like to your Zopa app"
          />
        </View>
        <View>
          <NOPAButton
            title="Select your fake bank account"
            onPress={() => {
              console.log('here');
              navigate('BankSelectionPage')
            }}
          />
        </View>

      </View>
    );
  };
}

export default Homepage;
