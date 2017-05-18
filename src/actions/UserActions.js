import axios from 'axios';
import { createAction } from 'redux-actions';

import * as UserActionTypes from '../constants/UserActionTypes';

const receiveUsers = createAction(UserActionTypes.RECEIVE_USERS);

export function getUsers() {
  return (dispatch) => {
    axios.get('/users')
      .then((response) => {
        dispatch(receiveUsers(response.data));
      });
  };
}