import { push } from 'connected-react-router';

export const NAVIGATOR_DRAWER_TOGGLE = 'NAVIGATOR_DRAWER_TOGGLE';
export const NAVIGATOR_DRAWER_CLOSE = 'NAVIGATOR_DRAWER_CLOSE';
export const UPDATE_MESSAGE_INPUT = 'UPDATE_MESSAGE_INPUT';
export const MESSENGER_FETCH_SUCCESS = 'MESSENGER_FETCH_SUCCESS';
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

export function updateMessageInput(messageInput) {
  return { type: UPDATE_MESSAGE_INPUT, messageInput: messageInput };
}

export function messengerFetch(theatreCode) {
  return dispatch => {
    return fetch('/api/messages/' + theatreCode, {
      method: 'GET',
      mode: 'cors',
      credientials: 'include',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => dispatch(messengerFetchSuccess(data)));
  }
}

export function messengerFetchSuccess(data) {
  return { type: MESSENGER_FETCH_SUCCESS, data: data };
}

export function messengerSubscribe(viewerId, theatreCode, callback) {
  return { type: MESSENGER_SUBSCRIBE, viewerId: viewerId, theatreCode: theatreCode, callback: callback };
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