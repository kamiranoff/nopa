import {
  StackNavigator,
} from 'react-navigation';

import React from 'react';
import Theme from '../constants/theme';

import Homepage from '../pages/Homepage/Homepage';
import BankSelectionPage from '../pages/BankSelectionPage/BankSelectionPage';

const App = StackNavigator({
  Main: {
    screen: Homepage,
    navigationOptions: {
      title: 'Homepage',
      headerStyle: { backgroundColor: Theme.colors.BACKGROUND_COLOR }
    }
  },
  BankSelectionPage:{
    screen: BankSelectionPage,
    navigationOptions: {
      title: 'Choose Bank',
      headerStyle: { backgroundColor: Theme.colors.BACKGROUND_COLOR }
    }
  }
});

export default App;
