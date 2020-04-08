import axios from 'axios';

import { SAVE_LOCATION_DATA } from './types';
import { API_URL } from './../services/api_urls';
import { GetHeaders } from './../credentials/access_headers';

export function fetchlocationDetails() {
  return dispatch => {
    axios
      .get(`${API_URL}/static/location`, GetHeaders())
      .then(response => {
        dispatch({
          type: SAVE_LOCATION_DATA,
          payload: response.data
        });
      })
      .catch(error => {
        console.log('error', error);
      });
  };
}
