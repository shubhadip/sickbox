import axios from 'axios';
import { fetchProductDetails } from './product_actions';
import {
  fetchCartDetails,
  addToCart,
  updateCart,
  removeProduct
} from './cart_actions';

import { subscribeUser } from './subscribe_actions';
import { fetchProductData, fetchHomeData } from './server_actions';

declare let __isBrowser__: boolean;

let API_TOKEN;

if (
  __isBrowser__ &&
  /android|webos|iphone|ipad|ipod|blackberry|windows phone|iemobile|BB10|playbook|opera mini|ucbrowser|wpdesktop/i.test(
    navigator.userAgent.toLowerCase()
  )
) {
  API_TOKEN =
    'NGNlNTUwYTc0MjBjYzQzZTdiZTNhMmY1NjNhMThhOGU6OGI1NThkZDgtOGQ5ZS00OWYxLTk4MDAtNzYxMGEzOGNjYzNk';
} else {
  API_TOKEN =
    'MWY5ZTNmNzFmN2M1ZTUyMjkwNjM2NGMzNmNjZTA3N2Q6M2RhMmI3OTgtNTY2MC00ZDRhLWJhZWQtNTZlMDI2MWRlYmZm';
}
axios.defaults.headers.common['Api-Token'] = API_TOKEN;

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if ([500, 501, 502, 503, 503].indexOf(error.response.status) > -1) {
      // toastr.warning('Something went wrong try again later ...');
    } else if (
      error.response.status === 401 &&
      error.response.data.error.code === 10
    ) {
      // signoutUser();
    }
    return Promise.reject(error);
  }
);

export { fetchProductDetails };
export { fetchProductData };
export { fetchHomeData };
export { fetchCartDetails, addToCart, updateCart, removeProduct };
export { subscribeUser };
