import { handleActions } from 'redux-actions';
import * as UserActionTypes from '../constants/UserActionTypes';

const userReducer = handleActions({
  [UserActionTypes.RECEIVE_USERS]: (state, action) => receiveUsersData(state, action),
}, {
  users: null,
});

function receiveUsersData(state, action) {
  return {
    ...state,
    users: {
      ...state.users,
      ...action.payload.users,
    },
    loading: false,
    pageNo: action.payload.pageNo,
  };
}

export default userReducer;
