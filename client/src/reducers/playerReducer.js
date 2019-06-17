import { initialState } from './rootReducer';
import theatreConnection from "../utils/theatreConnection.js";
import { COMMAND_TYPE } from '../utils/theatreConnection';
import {
  PLAYER_MOUNT,
  PLAYER_COMMAND_FETCH_SUCCESS,
  PLAYER_SUBSCRIBE,
  PLAYER_UNSUBSCRIBE,
  PLAYER_RECIEVE,
  PLAYER_BROADCAST
  } from '../actions/playerActions';

export default function player(state = initialState.player, action) {
  let newState;
  let videoId;
  let videoSeek;
  let videoState;
  switch(action.type) {
    case PLAYER_MOUNT:
      newState = {
        ...state,
        player: action.player,
      }
      return newState;
    case PLAYER_COMMAND_FETCH_SUCCESS:
      if(action.data.payload_type !== COMMAND_TYPE) {
        return state;
      }
      videoId = action.data.video_id || state.player.props.url;
      videoSeek = action.data.seek_seconds || 0;
      videoState = "pause";
      newState = {
        ...state,
        videoId: videoId,
        videoState: videoState,
      }
      newState.player.seekTo(videoSeek);
      return newState;
    case PLAYER_SUBSCRIBE:
      const connection = state.connection || new theatreConnection(action.viewerId, action.callback, COMMAND_TYPE);
      connection.openNewTheatre(action.theatreCode);
      newState = {
        ...state,
        connection: connection,
      }
      return newState;
    case PLAYER_UNSUBSCRIBE:
      if(state.connection) {
        state.connection.disconnect();
        delete state.connection;
      }
      newState = {
        ...state,
        connection: null,
      }
      return newState;
    case PLAYER_RECIEVE:
      if(action.data.payload_type !== COMMAND_TYPE) {
        return state;
      }
      videoId = action.data.video_id || state.player.props.url;
      videoSeek = action.data.seek_seconds || 0;
      videoState = action.data.state || "pause";
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
      videoId = action.data.videoId || state.player.props.url;
      videoSeek = state.player.getCurrentTime() || 0.0;
      videoState = action.data.videoState || "pause";
      state.connection.command(videoId, videoSeek, videoState, action.data.theatreCode);
      return state;
    default:
      return state;
  }
}