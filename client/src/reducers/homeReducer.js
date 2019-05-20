import { initialState } from './rootReducer';
import { HOME_DRAWER_TOGGLE, HOME_DRAWER_CLOSE, THEATRE_FETCH_SUCCESS } from '../actions/homeActions';

export default function home(state = initialState.home, action) {
  let newState;
  switch (action.type) {
    case HOME_DRAWER_TOGGLE:
      newState = {
        ...state,
        mobileOpen: !state.mobileOpen,
      }
      return newState;
    case HOME_DRAWER_CLOSE:
      newState = {
        ...state,
        mobileOpen: false,
      }
      return newState;
    case THEATRE_FETCH_SUCCESS:
      newState = {
        ...state,
        theatres: action.data,
      }
      return newState;
    default:
      return state;
  }
}