import { initialState } from './rootReducer';
import {
  THEATRE_FETCH_SUCCESS,
  THEATRE_GENERATE_SUCCESS,
  } from '../actions/homeActions';

export default function home(state = initialState.home, action) {
  let newState;
  switch (action.type) {
    case THEATRE_FETCH_SUCCESS:
      newState = {
        ...state,
        theatres: action.data,
      }
      return newState;
    case THEATRE_GENERATE_SUCCESS:
      newState = {
        ...state,
        newTheatreCode: action.data.code,
      }
      return newState;
    default:
      return state;
  }
}