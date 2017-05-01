import Expo from 'expo';
import React from 'react';

import App from './src/components/App';
import { Provider } from 'react-redux';

import configureStore from './src/redux/store';

const store = configureStore();

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}


Expo.registerRootComponent(Main);
