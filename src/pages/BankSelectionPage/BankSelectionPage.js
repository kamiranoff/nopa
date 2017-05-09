import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import debounce from 'lodash.debounce';

import { NOPAButton } from '../../common';

import TitleDescription from '../../components/TitleDescription/TitleDescription';
import ImageList from '../../components/ImageList/ImageList';
import styles from './styles';

import banks from '../../constants/banks';

class BankSelectionPage extends Component {

  _navigate = debounce((pageName) => {
    const { navigate } = this.props.navigation
    navigate(pageName);
  }, 500);

  render() {
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
            this._navigate('LoginPage');
          }}
        />

      </View>
    );
  }
}

export default BankSelectionPage;