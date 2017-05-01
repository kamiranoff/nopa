import {
  RECEIVE_TRANSACTIONS,
  REQUEST_TRANSACTIONS,
  REQUEST_TRANSACTIONS_FAILURE,
} from '../constants/actions';

const initialState = {
  transactions: [],
  loading: true,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {

    case REQUEST_TRANSACTIONS:
      return {
        ...state,
        loading: true,
      };

    case RECEIVE_TRANSACTIONS:
      return {
        ...state,
        transactions: action.transactions,
      };

    case REQUEST_TRANSACTIONS_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};
