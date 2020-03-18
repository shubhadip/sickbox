import axios from 'axios';

export const fetchAboutData = () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos/').then(data => {
    return data;
  });
};
