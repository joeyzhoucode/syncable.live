import { push } from 'connected-react-router';

export const HOME_DRAWER_TOGGLE = 'HOME_DRAWER_TOGGLE';
export const HOME_DRAWER_CLOSE = 'HOME_DRAWER_CLOSE';
export const THEATRE_FETCH_SUCCESS = 'THEATRE_FETCH_SUCCESS';

export function homeDrawerToggle() {
  return { type: HOME_DRAWER_TOGGLE };
}

export function homeDrawerClose() {
  return { type: HOME_DRAWER_CLOSE };
}

export function historyPush(path) {
  return dispatch => {
    dispatch(push(path));
  }
}

export function theatreFetch() {
  return dispatch => {
    return fetch('/api/theatres', {
      method: 'GET',
      mode: 'cors',
      credientials: 'include',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => dispatch(theatreFetchSuccess(data)));
  }
}

export function theatreFetchSuccess(data) {
  return { type: THEATRE_FETCH_SUCCESS, data: data };
}