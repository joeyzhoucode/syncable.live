import { initialState } from './rootReducer';
import { PROFILE_FETCH_CALLBACK } from '../actions/profileActions';

export default function profile(state = initialState.profile, action) {
  let newState;
  switch(action.type) {
    case PROFILE_FETCH_CALLBACK:
      newState = {
        ...state,
        id: action.data.id,
        firstName: action.data.first_name,
        lastName: action.data.last_name,
        email: action.data.email,
        image: action.data.image,
      }
      return newState;
    default:
      return state;
  }
}