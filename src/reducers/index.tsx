import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import commonReducer from './common_reducer';
import productReducer from './product_reducer';
import cartReducer from './cart_reducer';
import addressReducer from './address_reducer';
import staticReducer from './static_reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  common: commonReducer,
  product: productReducer,
  cart: cartReducer,
  address: addressReducer,
  static: staticReducer
});

export default rootReducer;
