import theatreConnection from "../utils/theatreConnection.js";

export const PLAYER_MOUNT = 'PLAYER_MOUNT';
export const PLAYER_CONNECT = 'PLAYER_CONNECT';
export const PLAYER_UPDATE = 'PLAYER_UPDATE';
export const PLAYER_COMMAND = 'PLAYER_COMMAND';

export function playerMount(player) {
  return { type: PLAYER_MOUNT, player: player };
}

export function playerConnect(viewerId, theatreCode, callback) {
  const connection = new theatreConnection(viewerId, callback);
  connection.openNewTheatre(theatreCode);
  return { type: PLAYER_CONNECT, connection: connection };
}

export function playerUpdate(data) {
  return { type: PLAYER_UPDATE, data: data };
}

export function playerCommand(data) {
  return { type: PLAYER_COMMAND, data: data };
}