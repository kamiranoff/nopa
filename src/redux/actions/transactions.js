import callApi from '../../util/apiCaller';
import getEnvironment from '../../constants/environment';

const ENV = getEnvironment();
import {
  RECEIVE_TRANSACTIONS,
  REQUEST_TRANSACTIONS,
  REQUEST_TRANSACTIONS_FAILURE,
} from '../constants/actions';

const requestTransactions = () => ({
  type: REQUEST_TRANSACTIONS
});

const requestTransactionFails = (response) => ({
  type: REQUEST_TRANSACTIONS_FAILURE,
  error: {
    message: response.error_message,
    errorClass: response.error_class
  }
});

const receiveTransactions = (response) => ({
  type: RECEIVE_TRANSACTIONS,
  transactions: response.data,
});

export function fetchTransactions() {
  const endPoint = ENV.API.TRANSACTIONS;
  const method = 'get';
  const headers = {
    'Accept':'application/json',
    'Content-type': 'application/json',
    'Client-id': ENV.CLIENT_ID,
    'Service-secret': ENV.SERVICE_SECRET,

  }
  return (dispatch) => {
    dispatch(requestTransactions());
    return callApi(endPoint, 'get', headers)
      .then((response) => {
      console.log(response);
        if (response.error_message || response.error_class) {
          dispatch(requestTransactionFails(response));
        } else {
          dispatch(receiveTransactions(response));
        }
      });
  };
}