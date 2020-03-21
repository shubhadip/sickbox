import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import todoReducer from './todo_reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer
});

export default rootReducer;
