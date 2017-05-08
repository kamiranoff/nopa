import React from 'react';
import {
  StackNavigator,
} from 'react-navigation';

import Homepage from '../pages/Homepage/Homepage';
import BankSelectionPage from '../pages/BankSelectionPage/BankSelectionPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import TransactionsPage from '../pages/TransactionsPage/TransactionsPage';
import styles from './styles';

const App = StackNavigator({
  Main: {
    screen: Homepage,
    navigationOptions: {
      title: 'Homepage',
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.headerTitleStyle,
    }
  },
  BankSelectionPage:{
    screen: BankSelectionPage,
    navigationOptions: {
      title: 'Choose Bank',
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.headerTitleStyle,
    }
  },
  LoginPage:{
    screen: LoginPage,
    navigationOptions: {
      title: 'Connect to your bank account',
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.headerTitleStyle,
    }
  },
  TransactionsPage: {
    screen: TransactionsPage,
    navigationOptions: {
      title: 'Your Transactions',
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.headerTitleStyle,
    }
  }
});

export default App;
