import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';

import reducer from '../redux/reducers';

const configureStore = () => {
  let store;

  if (__DEV__) {
    const logger = createLogger({ collapsed: true });
    store = createStore(
      reducer,
      applyMiddleware(thunk, promise, logger),
    );
  } else {
    store = createStore(
      reducer,
      applyMiddleware(thunk, promise),
    );
  }
  return store;
};

export default configureStore;
