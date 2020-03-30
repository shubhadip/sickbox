import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import commonReducer from './common_reducer';
import todoReducer from './todo_reducer';
import productReducer from './product_reducer';
import cartReducer from './cart_reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer,
  common: commonReducer,
  product: productReducer,
  cart: cartReducer
});

export default rootReducer;
