import { initialState } from './rootReducer';
import { PROFILE_FETCH_CALLBACK } from '../actions/profileActions';

export default function profile(state = initialState.profile, action) {
  let newState;
  switch(action.type) {
    case PROFILE_FETCH_CALLBACK:
      newState = {
        ...state,
        name: action.data.name,
        email: action.data.email,
      }
      return newState;
    default:
      return state;
  }
}