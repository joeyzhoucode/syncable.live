import { initialState } from './rootReducer';
import { 
  NAVIGATOR_DRAWER_TOGGLE,
  NAVIGATOR_DRAWER_CLOSE,
  MESSENGER_SUBSCRIBE,
  MESSENGER_RECIEVE,
  MESSENGER_BROADCAST,
  } from '../actions/navigatorActions';
import { MESSAGE_PAYLOAD } from '../utils/theatreConnection';

export default function navigator(state = initialState.navigator, action) {
  let newState;
  switch (action.type) {
    case NAVIGATOR_DRAWER_TOGGLE:
      newState = {
        ...state,
        mobileOpen: !state.mobileOpen,
      }
      return newState;
    case NAVIGATOR_DRAWER_CLOSE:
      newState = {
        ...state,
        mobileOpen: false,
      }
      return newState;
    default:
      return state;
    case MESSENGER_SUBSCRIBE:
      const connection = state.connection || action.connection;
      connection.openNewTheatre(action.theatreCode);
      newState = {
        ...state,
        connection: connection,
      }
      return newState;
    case MESSENGER_RECIEVE:
      if(action.data.payload_type !== MESSAGE_PAYLOAD) {
        return state;
      }
      let newMessages = state.messages;
      newMessages.push({
        viewerName: action.data.viewer.first_name + " " + action.data.viewer.last_name,
        content: action.data.content,
      })
      newState = {
        ...state,
        messages: newMessages,
      }
      return newState;
    case MESSENGER_BROADCAST:
      state.connection.message(action.data.message, action.data.theatreCode);
      return state;
  }
}