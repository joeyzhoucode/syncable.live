import * as types from './actionTypes';

export function playerMount(viewerId, callback) {
  return { type: types.PLAYER_MOUNT, viewerId: viewerId, callback: callback };
}

export function playerUpdate(data) {
  return { type: types.PLAYER_UPDATE, data: data };
}

export function playerCommand(data) {
  return { type: types.PLAYER_COMMAND, data: data };
}