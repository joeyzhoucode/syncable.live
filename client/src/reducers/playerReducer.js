import { initialState } from './rootReducer';
import { PLAYER_MOUNT, PLAYER_UPDATE, PLAYER_COMMAND } from '../actions/playerActions';

export default function player(state = initialState.player, action) {
  let newState;
  switch(action.type) {
    case PLAYER_MOUNT:
      newState = {
        ...state,
        connection: action.connection,
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
      state.connection.command(action.data.videoId, action.data.videoSeek, action.data.videoState, "Cineplex");
      return state;
    default:
      return state;
  }
}