import axios from 'axios';

import { browserHistory } from './../history';
const history = browserHistory;

import { AUTH_USER, AUTH_ERROR, LOGOUT_USER } from './types';
import { API_URL, AUTHENTICATION_URL } from './../services/api_urls';
import {
  saveAccessCredentials,
  deleteToken
} from '../credentials/access_credentials';
import { GetHeaders } from './../credentials/access_headers';

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signupUser({ email, password }) {
  return dispatch => {
    axios
      .post(`${API_URL}/signup`, {
        email,
        password
      })
      .then(response => {
        dispatch({
          type: AUTH_USER
        });
        saveAccessCredentials(response.data);
        history.push('/feature');
      })
      .catch(error => {
        dispatch(authError(error.response.data.error.message));
      });
  };
}

export function signoutUser() {
  deleteToken();
  history.push('/');
  return {
    type: LOGOUT_USER
  };
}

export function signinUser({ email, password }) {
  return dispatch => {
    const auth = {
      authentication: {
        email,
        password
      }
    };
    const headers = GetHeaders();
    axios
      .post(`${API_URL}${AUTHENTICATION_URL}`, auth, headers)
      .then(response => {
        dispatch({
          type: AUTH_USER
        });
        saveAccessCredentials(response.data);
        history.push('/feature');
      })
      .catch(error => {
        dispatch(authError(error.response.data.error.message));
      });
  };
}
