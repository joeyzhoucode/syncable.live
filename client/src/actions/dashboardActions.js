import * as types from './actionTypes';

export function dashboardDrawerToggle() {
  return { type: types.DASHBOARD_DRAWER_TOGGLE };
}

export function dashboardDrawerClose() {
  return { type: types.DASHBOARD_DRAWER_CLOSE };
}