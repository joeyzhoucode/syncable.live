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
      const viewerId = action.data.viewer.id;
      const videoId = action.data.video_id || state.videoId;
      const videoSeek = action.data.seek_seconds || 0;
      const videoState = action.data.state || "pause";
      newState = {
        ...state,
        videoId: videoId,
        videoSeek: videoSeek,
        videoState: videoState,
      }
      if(viewerId !== newState.connection.viewerId) {
        newState.player.seekTo(newState.videoSeek);
      }
      return newState;
    case PLAYER_COMMAND:
      state.connection.command(action.data.videoId, state.player.getCurrentTime(), action.data.videoState, "Cineplex");
      return state;
    default:
      return state;
  }
}