import { handleActions } from 'redux-actions';
import * as AuthActionTypes from '../constants/AuthActionTypes';

const userReducer = handleActions({
  [AuthActionTypes.SET_USER]: (state, action) => setUser(state, action),
}, {
  currentUser: {},
});

function setUser(state, action) {
  return {
    ...state,
    currentUser: action.payload,
  };
}

export default userReducer;
