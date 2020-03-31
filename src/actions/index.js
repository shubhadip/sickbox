import axios from 'axios';
import {
  API_TOKEN
} from './../constants';
import {
    fetchProductDetails
} from './product_actions';
import {
  fetchCartDetails,
  addToCart
} from './cart_actions';

import {subscribeUser} from './subscribe_actions'
import {
    fetchProductData,
    fetchHomeData
} from './server_actions';

axios.defaults.headers.common['Api-Token'] = API_TOKEN;

axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if ([500, 501, 502, 503, 503].indexOf(error.response.status) > -1) {
    // toastr.warning('Something went wrong try again later ...');
  } else if (error.response.status === 401 && error.response.data.error.code === 10) {
    signoutUser();
  }
  return Promise.reject(error);
});

export {
    fetchProductDetails
};
export {
    fetchProductData
};
export {
  fetchHomeData
};
export {
  fetchCartDetails,
  addToCart
};
export {
  subscribeUser
};