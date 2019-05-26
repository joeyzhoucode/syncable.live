import { initialState } from './rootReducer';
import { 
  NAVIGATOR_DRAWER_TOGGLE,
  NAVIGATOR_DRAWER_CLOSE,
  MESSENGER_CONNECT,
  MESSENGER_UPDATE,
  MESSENGER_TALK,
  } from '../actions/navigatorActions';

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
    case MESSENGER_CONNECT:
      newState = {
        ...state,
        globalConnection: action.connection,
      }
      return newState;
    case MESSENGER_UPDATE:
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
    case MESSENGER_TALK:
      state.globalConnection.talk(action.data.message, action.data.theatreCode);
      return state;
  }
}