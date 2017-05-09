import React, { Component } from 'react';
import { ScrollView, View, TextInput, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';

import { fetchTransactions } from '../../redux/actions/transactions';

import { NOPAButton, NOPAText } from '../../common';
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
      loading: false,
      error: ''
    };
  }


  _navigate = debounce((pageName) => {
    const { navigate } = this.props.navigation
    navigate(pageName);
  }, 500);

  onPress() {
    if (
      this.state.surname
      && this.state.sortCode
      && this.state.accountNumber
      && this.state.passcode
      && this.state.memorableWord
    ) {
      this.props.fetchTransactions(this.state);
    } else {
      this.setState({ error: 'Please fill the form' })
    }
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.transactions.length) {
      this._navigate('TransactionsPage');
    }
  }

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <View>
          <TitleDescription
            title="Log in to your online banking"
            desc="Enter the same details you use to login to your online banking"
          />
          <KeyboardAvoidingView behavior='padding' style={{ marginTop: 20 }}>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                value={this.state.surname}
                placeholder={'Surname'}
                onChangeText={(surname) => this.setState({ surname, error:'' })}
                placeholderTextColor={'rgba(255,255,255,0.8)'}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                value={this.state.sortCode}
                placeholder={'Sort code'}
                onChangeText={(sortCode) => this.setState({ sortCode, error:'' })}
                placeholderTextColor={'rgba(255,255,255,0.8)'}
              /></View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                value={this.state.accountNumber}
                placeholder={'Account Number'}
                onChangeText={(accountNumber) => this.setState({ accountNumber, error:'' })}
                placeholderTextColor={'rgba(255,255,255,0.8)'}
              /></View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                value={this.state.passcode}
                placeholder={'Passcode'}
                onChangeText={(passcode) => this.setState({ passcode, error:'' })}
                placeholderTextColor={'rgba(255,255,255,0.8)'}
              /></View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                value={this.state.memorableWord}
                placeholder={'Memorable word'}
                onChangeText={(memorableWord) => this.setState({ memorableWord, error:'' })}
                placeholderTextColor={'rgba(255,255,255,0.8)'}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
        {this.state.error ?
          <NOPAText
          >
            {this.state.error}
          </NOPAText> : null }
        <NOPAButton
          isDisabled={this.state.loading}
          title="Continue"
          onPress={() => {
            this.onPress();
          }}
        />
      </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ transactions: { transactions } }) => ({
  transactions,
});

export default connect(mapStateToProps, { fetchTransactions })(LoginPage);
