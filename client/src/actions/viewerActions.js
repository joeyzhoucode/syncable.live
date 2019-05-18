import * as types from './actionTypes';

export function viewerLogin() {
  return dispatch => {
    return fetch('http://localhost:3001/auth/google_oauth2', {
      method: 'GET',
      mode: 'cors',
      credientials: 'include',
      headers: {
        'X-Api-Key': 'apiKey',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => dispatch(viewerLoginCallback(data)));
  }
}

export function viewerLoginCallback(data) {
  return { type: types.VIEWER_LOGIN, data: data };
}