import initialState from './initialState';
import { VIEWER_LOGIN } from '../actions/actionTypes';

export default function viewer(state = initialState.viewer, action) {
  let newState;
  switch(action.type) {
    case VIEWER_LOGIN:
      return state;
    default:
      return state;
  }
}