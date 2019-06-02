import theatreConnection from "../utils/theatreConnection.js";

export const PLAYER_MOUNT = 'PLAYER_MOUNT';
export const PLAYER_SUBSCRIBE = 'PLAYER_SUBSCRIBE';
export const PLAYER_RECIEVE = 'PLAYER_RECIEVE';
export const PLAYER_BROADCAST = 'PLAYER_BROADCAST';

export function playerMount(player) {
  return { type: PLAYER_MOUNT, player: player };
}

export function playerSubscribe(viewerId, theatreCode, callback) {
  const connection = new theatreConnection(viewerId, callback);
  connection.openNewTheatre(theatreCode);
  return { type: PLAYER_SUBSCRIBE, connection: connection };
}

export function playerRecieve(data) {
  console.log(data);
  return { type: PLAYER_RECIEVE, data: data };
}

export function playerBroadcast(data) {
  return { type: PLAYER_BROADCAST, data: data };
}