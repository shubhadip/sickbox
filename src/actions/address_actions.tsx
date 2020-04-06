import axios from 'axios';

import { SAVE_ADDRESS } from './types';
import { API_URL } from './../services/api_urls';
import { GetHeaders } from './../credentials/access_headers';

export function fetchAddresses() {
  return dispatch => {
    axios
      .get(`${API_URL}/addresses`, GetHeaders())
      .then(response => {
        dispatch({
          type: SAVE_ADDRESS,
          payload: response.data
        });
      })
      .catch(error => {
        console.log('error', error);
      });
  };
}

export function addAddress(payload) {
  return dispatch => {
    axios
      .post(`${API_URL}/addresses`, payload, GetHeaders())
      .then(response => {
        dispatch(fetchAddresses());
      })
      .catch(error => {
        console.log('error', error);
      });
  };
}

export function updateAddress(payload) {
  return dispatch => {
    axios
      .patch(`${API_URL}/addresses/${payload['id']}`, payload, GetHeaders())
      .then(response => {
        dispatch(fetchAddresses());
      })
      .catch(error => {
        console.log('error', error);
      });
  };
}

export function deleteAddress(payload) {
  return dispatch => {
    axios
      .delete(`${API_URL}/addresses/${payload['id']}`, {
        ...GetHeaders(),
        ...payload
      })
      .then(response => {
        dispatch(fetchAddresses());
      })
      .catch(error => {
        console.log('error', error);
      });
  };
}
