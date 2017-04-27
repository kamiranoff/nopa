import {
  StackNavigator,
} from 'react-navigation';

import React from 'react';
import Theme from '../constants/theme';

import Homepage from '../pages/Homepage/Homepage';

const App = StackNavigator({
  Main: {
    screen: Homepage,
    navigationOptions: {
      title: 'Homepage',
      headerStyle: { backgroundColor: Theme.colors.BACKGROUND_COLOR }
    }
  }
});

export default App;
