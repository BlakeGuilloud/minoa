import axios from 'axios';
import { createAction } from 'redux-actions';

import * as UIActionTypes from '../constants/UIActionTypes';

const setPathname = createAction(UIActionTypes.SET_PATHNAME);

export function changePath(payload) {
  return (dispatch) => {
    dispatch(setPathname(payload));
  };
}