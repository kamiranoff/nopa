import Expo, { Font } from 'expo';
import React from 'react';

import App from './src/components/App';
import { Provider } from 'react-redux';

import configureStore from './src/redux/store';

const store = configureStore();

class Main extends React.Component {

  constructor(){
    super();

    this.state = {
      fontLoaded: false
    }
  }

  async componentWillMount() {
    await Font.loadAsync({
      'monserratSemiBold': require('./assets/fonts/Montserrat-SemiBold.otf'),
      'robotoRegular': require('./assets/fonts/Roboto-Regular.ttf'),
      'robotoBold': require('./assets/fonts/Roboto-Bold.ttf')
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    if(!this.state.fontLoaded) {
      return null;
    }
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

Expo.registerRootComponent(Main);
