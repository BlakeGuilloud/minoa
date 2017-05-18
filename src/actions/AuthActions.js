import axios from 'axios';
import { createAction } from 'redux-actions';

import * as AuthActionTypes from '../constants/AuthActionTypes';

const setUser = createAction(AuthActionTypes.SET_USER);

export function login(payload) {
  return (dispatch) => {
    const mockUser = {
      username: 'blake',
      _id: '123',
    };
    dispatch(setUser(mockUser));
    // axios.post('/login', payload)
      // .then((response) => dispatch(setUser(response.data)))
      // .catch((err) => console.log(err));
  };
}