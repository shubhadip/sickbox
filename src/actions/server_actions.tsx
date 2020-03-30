import axios from 'axios';

import { API_URL } from './../services/api_urls';
import { GetHeaders } from './../credentials/access_headers';

export const fetchProductData = url => {
  const id = url.split('/')[2];
  return axios
    .get(`${API_URL}/products/${id}`, GetHeaders())
    .then(data => {
      return data;
    })
    .catch(error => {});
};

export const fetchHomeData = url => {
  const apiUrl1 = `${API_URL}/products/sick-day-box`;
  const apiUrl2 = `${API_URL}/carts`;
  const promise1 = axios.get(apiUrl1, GetHeaders());
  const promise2 = axios.get(apiUrl2, GetHeaders());

  return Promise.all([promise1, promise2]).then(values => {
    return values;
  });
};
