import axios from 'axios';

import { API_URL } from './../services/api_urls';
import { GetHeaders } from './../credentials/access_headers';

export function subscribeUser(payload) {
  return () => {
    axios
      .post(`${API_URL}/subscribers`, payload, GetHeaders())
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log('error', error);
      });
  };
}
