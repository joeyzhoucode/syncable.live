import * as types from './actionTypes';

export function dashboardDrawerToggle() {
  return { type: types.DASHBOARD_DRAWER_TOGGLE };
}

export function dashboardDrawerClose() {
  return { type: types.DASHBOARD_DRAWER_CLOSE };
}

export function fetchStuff() {
  return dispatch => {
    // return fetch(url(), {
    //   method: 'GET',
    //   mode: 'cors',
    //   credientials: 'include',
    //   headers: {
    //     'X-Api-Key': 'apiKey',
    //     'Accept': 'application/json'
    //   }
    // })
    // .then(response => response.json())
    // .then(json => dispatch(recieveStuff(json)));
  }
}