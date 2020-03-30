import axios from 'axios';

import { SAVE_CART_DETAILS } from './types';
import { API_URL } from './../services/api_urls';
import { GetHeaders } from './../credentials/access_headers';

export function fetchCartDetails() {
  return dispatch => {
    axios
      .get(`${API_URL}/carts`, GetHeaders())
      .then(response => {
        dispatch({
          type: SAVE_CART_DETAILS,
          payload: response.data
        });
      })
      .catch(error => {
        console.log('error', error);
      });
  };
}

export function addToCart(payload) {
  return dispatch => {
    axios
      .post(`${API_URL}/carts`, payload, GetHeaders())
      .then(response => {
        dispatch(fetchCartDetails);
      })
      .catch(error => {
        console.log('error', error);
      });
  };
}
