import React, { Component } from 'react';
import { Image, View, Dimensions } from 'react-native';
import debounce from 'lodash.debounce';

import { NOPAText, NOPAButton } from '../../common/index';
import TitleDescription from '../../components/TitleDescription/TitleDescription';

import styles from './styles';
const logo = require('../../../assets/logo/LogoNopa.png');

class Homepage extends Component {

  _navigate = debounce((pageName) => {
    const { navigate } = this.props.navigation
    navigate(pageName);
  }, 500);

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image
            style={{
              width: Dimensions.get('window').width / 3,
            }}
            source={logo}
            resizeMode={'contain'}
          />
          <TitleDescription
            title="Welcome to Zopa connect"
            desc="Keep track of all your expenses by connecting as many bank accounts as you’d like to your Zopa app"
          />
        </View>
        <View>
          <NOPAButton
            title="Select your fake bank account"
            onPress={() => {
              this._navigate('BankSelectionPage')
            }}
          />
        </View>

      </View>
    );
  };
}

export default Homepage;
