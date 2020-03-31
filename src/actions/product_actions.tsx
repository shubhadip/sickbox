import axios from 'axios';

import { SAVE_PRODUCT_DETAILS } from './types';
import { API_URL } from './../services/api_urls';
import { GetHeaders } from './../credentials/access_headers';


export function fetchProductDetails(url: string) {
  return dispatch => {
    axios
      .get(`${API_URL}/products/${url}`, GetHeaders())
      .then(response => {
        dispatch({
          type: SAVE_PRODUCT_DETAILS,
          payload: response.data
        });
      })
      .catch(error => {
        console.log('error', error);
      });
  };
}
