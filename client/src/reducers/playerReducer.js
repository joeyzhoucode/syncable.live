import { initialState } from './rootReducer';
import { PLAYER_MOUNT, PLAYER_CONNECT, PLAYER_UPDATE, PLAYER_COMMAND } from '../actions/playerActions';

export default function player(state = initialState.player, action) {
  let newState;
  switch(action.type) {
    case PLAYER_MOUNT:
      newState = {
        ...state,
        player: action.player,
      }
      return newState;
    case PLAYER_CONNECT:
      newState = {
        ...state,
        connection: action.connection,
      }
      return newState;
    case PLAYER_UPDATE:
      const videoId = action.data.video_id || state.videoId;
      const videoSeek = action.data.seek_seconds || 0;
      const videoState = action.data.state || "pause";
      newState = {
        ...state,
        videoId: videoId,
        videoState: videoState,
      }
      if(Math.floor(videoSeek) !== Math.floor(state.player.getCurrentTime())) {
        newState.player.seekTo(videoSeek);
      }
      return newState;
    case PLAYER_COMMAND:
      state.connection.command(action.data.videoId, state.player.getCurrentTime() || 0.0, action.data.videoState, action.data.theatreCode);
      return state;
    default:
      return state;
  }
}