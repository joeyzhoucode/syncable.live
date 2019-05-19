export const DASHBOARD_DRAWER_TOGGLE = 'DASHBOARD_DRAWER_TOGGLE';
export const DASHBOARD_DRAWER_CLOSE = 'DASHBOARD_DRAWER_CLOSE';

export function dashboardDrawerToggle() {
  return { type: DASHBOARD_DRAWER_TOGGLE };
}

export function dashboardDrawerClose() {
  return { type: DASHBOARD_DRAWER_CLOSE };
}