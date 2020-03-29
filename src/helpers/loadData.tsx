import axios from 'axios';
import { homeData } from '../server/utils';

export const fetchAboutData = (dispatch?: any) => {
  return axios.get('https://jsonplaceholder.typicode.com/todos/').then(data => {
    return !dispatch
      ? data
      : dispatch({
          type: 'TODOS',
          payoad: homeData(data.data)
        });
  });
};

export const fetchProductData = (dispatch?: any) => {
  return axios.get('https://jsonplaceholder.typicode.com/todos/').then(data => {
    return !dispatch ? data : dispatch();
  });
};
