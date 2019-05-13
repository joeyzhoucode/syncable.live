import initialState from './initialState';
import { PLAYER_MOUNT, PLAYER_UPDATE, PLAYER_COMMAND } from '../actions/actionTypes';

import SyncConnection from "../services/SyncConnection.js";

export default function player(state = initialState.player, action) {
  let newState;
  console.log(action.type);
  switch (action.type) {
    case PLAYER_MOUNT:
      const syncConnection = new SyncConnection(action.viewerId, action.callback);
      syncConnection.openNewTheatre("Cineplex");
      newState = {
        ...state,
        connection: syncConnection,
      }
      return newState;
    case PLAYER_UPDATE:
      newState = {
        ...state,
        ...action.data,
      }
      return newState;
    case PLAYER_COMMAND:
      newState = {
        ...state,
        ...action.data,
      }
      state.connection.talk("hello world!", "Cineplex");
      return newState;
    default:
      return state;
  }
}