export const PROFILE_FETCH_CALLBACK = 'PROFILE_FETCH_CALLBACK';

export function profileFetch() {
  return dispatch => {
    return fetch('/api/profile', {
      method: 'GET',
      mode: 'cors',
      credientials: 'include',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => dispatch(profileFetchCallback(data)));
  }
}

export function profileFetchCallback(data) {
  return { type: PROFILE_FETCH_CALLBACK, data: data };
}