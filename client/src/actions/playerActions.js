export const PLAYER_MOUNT = 'PLAYER_MOUNT';
export const PLAYER_COMMAND_FETCH = 'PLAYER_COMMAND_FETCH';
export const PLAYER_COMMAND_FETCH_SUCCESS = 'PLAYER_COMMAND_FETCH_SUCCESS';
export const PLAYER_SUBSCRIBE = 'PLAYER_SUBSCRIBE';
export const PLAYER_UNSUBSCRIBE = 'PLAYER_UNSUBSCRIBE';
export const PLAYER_RECIEVE = 'PLAYER_RECIEVE';
export const PLAYER_BROADCAST = 'PLAYER_BROADCAST';

export function playerMount(player) {
  return { type: PLAYER_MOUNT, player: player };
}

export function playerCommandFetch(theatreCode) {
  return dispatch => {
    return fetch('/api/commands/' + theatreCode, {
      method: 'GET',
      mode: 'cors',
      credientials: 'include',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => dispatch(playerCommandFetchSuccess(data.pop())));
  }
}

export function playerCommandFetchSuccess(data) {
  return { type: PLAYER_COMMAND_FETCH_SUCCESS, data: data };
}

export function playerSubscribe(viewerId, theatreCode, callback) {
  return { type: PLAYER_SUBSCRIBE, viewerId: viewerId, theatreCode: theatreCode, callback: callback };
}

export function playerUnsubscribe() {
  return { type: PLAYER_UNSUBSCRIBE };
}

export function playerRecieve(data) {
  return { type: PLAYER_RECIEVE, data: data };
}

export function playerBroadcast(data) {
  return { type: PLAYER_BROADCAST, data: data };
}