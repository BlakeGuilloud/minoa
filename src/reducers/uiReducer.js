import { handleActions } from 'redux-actions';
import * as UIActionTypes from '../constants/UIActionTypes';
console.log('location pathname: ', location)
const uiReducer = handleActions({
  [UIActionTypes.SET_PATHNAME]: (state, action) => receiveSetPathname(state, action),
}, {
  pathname: location.pathname !== '/' ? location.pathname.substr(1) : 'home',
});

function receiveSetPathname(state, action) {
  return {
    ...state,
    pathname: action.payload,
  };
}

export default uiReducer;
