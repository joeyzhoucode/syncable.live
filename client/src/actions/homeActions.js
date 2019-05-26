import { push } from 'connected-react-router';

export const THEATRE_FETCH_SUCCESS = 'THEATRE_FETCH_SUCCESS';
export const THEATRE_GENERATE_SUCCESS = 'THEATRE_GENERATE_SUCCESS';

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

export function theatreGenerate() {
  return dispatch => {
    return fetch('/api/theatres/new', {
      method: 'GET',
      mode: 'cors',
      credientials: 'include',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => dispatch(theatreGenerateSuccess(data)));
  }
}

export function theatreCreate(newTheatreCode) {
  return dispatch => {
    return fetch('/api/theatres', {
      method: 'POST',
      mode: 'cors',
      credientials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ theatre_code: newTheatreCode })
    })
    .then(response => response.json())
    .then(data => dispatch(push("/player/"+ data.code)));
  }
}

export function theatreDestroy(id) {
  return dispatch => {
    return fetch('/api/theatres/'+ id, {
      method: 'DELETE',
      mode: 'cors',
      credientials: 'include',
      headers: {
        'Accept': 'application/json',
      }
    })
    .then(response => response.json())
    .then(data => dispatch(theatreFetchSuccess(data)));
  }
}

export function theatreFetchSuccess(data) {
  return { type: THEATRE_FETCH_SUCCESS, data: data };
}

export function theatreGenerateSuccess(data) {
  return { type: THEATRE_GENERATE_SUCCESS, data: data };
}