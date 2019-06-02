import theatreConnection from "../utils/theatreConnection.js";
import { push } from 'connected-react-router';

export const NAVIGATOR_DRAWER_TOGGLE = 'NAVIGATOR_DRAWER_TOGGLE';
export const NAVIGATOR_DRAWER_CLOSE = 'NAVIGATOR_DRAWER_CLOSE';
export const MESSENGER_SUBSCRIBE = 'MESSENGER_SUBSCRIBE';
export const MESSENGER_RECIEVE = 'MESSENGER_RECIEVE';
export const MESSENGER_BROADCAST = 'MESSENGER_BROADCAST';

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

export function messengerSubscribe(viewerId, callback, theatreCode) {
  const connection = new theatreConnection(viewerId, callback);
  return { type: MESSENGER_SUBSCRIBE, connection: connection, theatreCode: theatreCode };
}

export function messengerRecieve(data) {
  console.log(data);
  return { type: MESSENGER_RECIEVE, data: data };
}

export function messengerBroadcast(data) {
  return { type: MESSENGER_BROADCAST, data: data };
}