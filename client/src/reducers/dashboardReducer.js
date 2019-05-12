import initialState from './initialState';
import { DASHBOARD_DRAWER_TOGGLE, DASHBOARD_DRAWER_CLOSE } from '../actions/actionTypes';

export default function dashboard(state = initialState.dashboard, action) {
  let newState;
  switch (action.type) {
    case DASHBOARD_DRAWER_TOGGLE:
      newState = {
        ...state,
        mobileOpen: !state.mobileOpen,
      }
      return newState;
    case DASHBOARD_DRAWER_CLOSE:
      newState = {
        ...state,
        mobileOpen: false,
      }
      return newState;
    default:
      return state;
  }
}