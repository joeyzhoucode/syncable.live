import { initialState } from './rootReducer';
import { PLAYER_MOUNT, PLAYER_SUBSCRIBE, PLAYER_RECIEVE, PLAYER_BROADCAST } from '../actions/playerActions';

export default function player(state = initialState.player, action) {
  let newState;
  switch(action.type) {
    case PLAYER_MOUNT:
      newState = {
        ...state,
        player: action.player,
      }
      return newState;
    case PLAYER_SUBSCRIBE:
      newState = {
        ...state,
        connection: action.connection,
      }
      return newState;
    case PLAYER_RECIEVE:
      const videoId = action.data.video_id || state.videoId;
      const videoSeek = action.data.seek_seconds || 0;
      const videoState = action.data.state || "pause";
      newState = {
        ...state,
        videoId: videoId,
        videoState: videoState,
      }
      if(Math.floor(videoSeek/5) !== Math.floor(state.player.getCurrentTime()/5)) {
        newState.player.seekTo(videoSeek);
      }
      return newState;
    case PLAYER_BROADCAST:
      state.connection.command(action.data.videoId, state.player.getCurrentTime() || 0.0, action.data.videoState, action.data.theatreCode);
      return state;
    default:
      return state;
  }
}