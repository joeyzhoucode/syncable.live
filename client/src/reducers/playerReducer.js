import initialState from './initialState';
import { PLAYER_MOUNT, PLAYER_UPDATE, PLAYER_COMMAND } from '../actions/actionTypes';

import SyncConnection from "../services/SyncConnection.js";

export default function player(state = initialState.player, action) {
  let newState;
  switch(action.type) {
    case PLAYER_MOUNT:
      const syncConnection = new SyncConnection(action.viewerId, action.callback);
      syncConnection.openNewTheatre("Cineplex");
      newState = {
        ...state,
        connection: syncConnection,
        player: action.player,
      }
      return newState;
    case PLAYER_UPDATE:
      newState = {
        ...state,
        videoId: action.data.video_id,
        videoSeek: action.data.seek_seconds,
        videoState: action.data.state,
      }
      if(newState.videoSeek !== state.videoSeek) {
        newState.player.seekTo(newState.videoSeek);
      }
      return newState;
    case PLAYER_COMMAND:
      newState = {
        ...state,
        ...action.data
      }
      newState.connection.command(newState.videoId, newState.videoSeek, newState.videoState, "Cineplex");
      return newState;
    default:
      return state;
  }
}