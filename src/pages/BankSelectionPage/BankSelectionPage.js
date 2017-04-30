import React, { Component } from 'react';
import { View } from 'react-native';

import { NOPAButton } from '../../common';

import TitleDescription from '../../components/TitleDescription/TitleDescription';
import ImageList from '../../components/ImageList/ImageList';
import styles from './styles';

import banks from '../../constants/banks';

class BankSelectionPage extends Component {

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <TitleDescription
          title="Which bank does this account belong to?"
          desc="From the list below choose the bank you want to connect your account from."
        />
        <ImageList
          blocks={banks}
        />
        <NOPAButton
          title="Continue"
          onPress={() => {
            navigate('LoginPage')
          }}
        />
      </View>
    );
  }
}

export default BankSelectionPage;