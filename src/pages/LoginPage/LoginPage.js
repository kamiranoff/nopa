import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { fetchTransactions } from '../../redux/actions/transactions';

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
      loading: false,
    };
  }

  isLoading(state) {
    this.setState({ loading: state });
  }

  onPress() {
    this.props.fetchTransactions(this.state);
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.transactions.length) {
      nextProps.navigation.navigate('TransactionsPage');
    }
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
            onChangeText={(surname) => this.setState({ surname })}
            placeholderTextColor={'rgba(255,255,255,0.8)'}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            value={this.state.sortCode}
            placeholder={'Sort code'}
            onChangeText={(sortCode) => this.setState({ sortCode })}
            placeholderTextColor={'rgba(255,255,255,0.8)'}
          /></View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            value={this.state.accountNumber}
            placeholder={'Account Number'}
            onChangeText={(accountNumber) => this.setState({ accountNumber })}
            placeholderTextColor={'rgba(255,255,255,0.8)'}
          /></View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            value={this.state.passcode}
            placeholder={'Passcode'}
            onChangeText={(passcode) => this.setState({ passcode })}
            placeholderTextColor={'rgba(255,255,255,0.8)'}
          /></View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            value={this.state.memorableWord}
            placeholder={'Memorable word'}
            onChangeText={(memorableWord) => this.setState({ memorableWord })}
            placeholderTextColor={'rgba(255,255,255,0.8)'}
          />
        </View>
        <NOPAButton
          isDisabled={this.state.loading}
          title="Continue"
          onPress={() => {
            this.onPress();
          }}
        />

      </View>
    );
  }
}

const mapStateToProps = ({ transactions: { transactions } }) => ({
  transactions,
});

export default connect(mapStateToProps, { fetchTransactions })(LoginPage);