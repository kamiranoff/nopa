import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import { NOPAButton } from '../../common';
import TitleDescription from '../../components/TitleDescription/TitleDescription';

import styles from './styles';

class LoginPage extends Component {
  constructor() {
    super();

    this.state = {
      surname: '',
      sortCode: '',
      accountNumber: '',
      passcode: '',
      memorableWord: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TitleDescription
          title="Log in to your online banking"
          desc="Enter the same details you use to login to your online banking"
        />
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            value={this.state.surname}
            placeholder={'Surname'}
            onChange={(surname) => this.setState({ surname })}
            placeholderTextColor={'rgba(255,255,255,0.8)'}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            value={this.state.sortCode}
            placeholder={'Sort code'}
            onChange={(sortCode) => this.setState({ sortCode })}
            placeholderTextColor={'rgba(255,255,255,0.8)'}
          /></View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            value={this.state.accountNumber}
            placeholder={'Account Number'}
            onChange={(accountNumber) => this.setState({ accountNumber })}
            placeholderTextColor={'rgba(255,255,255,0.8)'}
          /></View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            value={this.state.passcode}
            placeholder={'Passcode'}
            onChange={(passcode) => this.setState({ passcode })}
            placeholderTextColor={'rgba(255,255,255,0.8)'}
          /></View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            value={this.state.memorableWord}
            placeholder={'Memorable word'}
            onChange={(memorableWord) => this.setState({ memorableWord })}
            placeholderTextColor={'rgba(255,255,255,0.8)'}
          />
        </View>
        <NOPAButton
          title="Continue"
          onPress={() => {
            console.log('BankSelectionPage')
          }}
        />

      </View>
    );
  }
}

export default LoginPage;