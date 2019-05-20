import theatreConnection from "../utils/theatreConnection.js";

export const PLAYER_MOUNT = 'PLAYER_MOUNT';
export const PLAYER_UPDATE = 'PLAYER_UPDATE';
export const PLAYER_COMMAND = 'PLAYER_COMMAND';

export function playerMount(viewerId, callback, player) {
  const connection = new theatreConnection(viewerId, callback);
  connection.openNewTheatre("Cineplex");
  return { type: PLAYER_MOUNT, connection: connection, player: player };
}

export function playerUpdate(data) {
  return { type: PLAYER_UPDATE, data: data };
}

export function playerCommand(data) {
  return { type: PLAYER_COMMAND, data: data };
}