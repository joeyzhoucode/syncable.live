import { push } from 'connected-react-router';

export const NAVIGATOR_DRAWER_TOGGLE = 'NAVIGATOR_DRAWER_TOGGLE';
export const NAVIGATOR_DRAWER_CLOSE = 'NAVIGATOR_DRAWER_CLOSE';
export const MESSENGER_SUBSCRIBE = 'MESSENGER_SUBSCRIBE';
export const MESSENGER_UNSUBSCRIBE = 'MESSENGER_UNSUBSCRIBE';
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
  return { type: MESSENGER_SUBSCRIBE, viewerId: viewerId, callback: callback, theatreCode: theatreCode };
}

export function messengerUnsubscribe() {
  return { type: MESSENGER_UNSUBSCRIBE };
}

export function messengerRecieve(data) {
  return { type: MESSENGER_RECIEVE, data: data };
}

export function messengerBroadcast(data) {
  return { type: MESSENGER_BROADCAST, data: data };
}