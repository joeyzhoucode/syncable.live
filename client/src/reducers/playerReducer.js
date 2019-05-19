import { initialState } from './rootReducer';
import { PLAYER_MOUNT, PLAYER_UPDATE, PLAYER_COMMAND } from '../actions/playerActions';

import theatreConnection from "../utils/theatreConnection.js";

export default function player(state = initialState.player, action) {
  let newState;
  switch(action.type) {
    case PLAYER_MOUNT:
      const connection = new theatreConnection(action.viewerId, action.callback);
      connection.openNewTheatre("Cineplex");
      newState = {
        ...state,
        connection: connection,
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
      if(parseInt(newState.videoSeek, 10) !== parseInt(state.videoSeek, 10)) {
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