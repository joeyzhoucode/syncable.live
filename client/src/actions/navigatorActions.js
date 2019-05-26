import theatreConnection from "../utils/theatreConnection.js";
import { push } from 'connected-react-router';

export const NAVIGATOR_DRAWER_TOGGLE = 'NAVIGATOR_DRAWER_TOGGLE';
export const NAVIGATOR_DRAWER_CLOSE = 'NAVIGATOR_DRAWER_CLOSE';
export const MESSENGER_CONNECT = 'MESSENGER_CONNECT';
export const MESSENGER_UPDATE = 'MESSENGER_UPDATE';
export const MESSENGER_TALK = 'MESSENGER_TALK';

export function navigatorDrawerToggle() {
  return { type: NAVIGATOR_DRAWER_TOGGLE };
}

export function navigatorDrawerClose() {
  return { type: NAVIGATOR_DRAWER_CLOSE };
}

export function historyPush(path) {
  return dispatch => {
    dispatch(push(path));
  }
}

export function messengerConnect(viewerId, callback, theatreCode) {
  const connection = new theatreConnection(viewerId, callback);
  return { type: MESSENGER_CONNECT, connection: connection, theatreCode: theatreCode };
}

export function messengerUpdate(data) {
  return { type: MESSENGER_UPDATE, data: data };
}

export function messengerTalk(data) {
  return { type: MESSENGER_TALK, data: data };
}