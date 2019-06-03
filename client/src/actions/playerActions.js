export const PLAYER_MOUNT = 'PLAYER_MOUNT';
export const PLAYER_SUBSCRIBE = 'PLAYER_SUBSCRIBE';
export const PLAYER_UNSUBSCRIBE = 'PLAYER_UNSUBSCRIBE';
export const PLAYER_RECIEVE = 'PLAYER_RECIEVE';
export const PLAYER_BROADCAST = 'PLAYER_BROADCAST';

export function playerMount(player) {
  return { type: PLAYER_MOUNT, player: player };
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