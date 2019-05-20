export const HOME_DRAWER_TOGGLE = 'HOME_DRAWER_TOGGLE';
export const HOME_DRAWER_CLOSE = 'HOME_DRAWER_CLOSE';

export function homeDrawerToggle() {
  return { type: HOME_DRAWER_TOGGLE };
}

export function homeDrawerClose() {
  return { type: HOME_DRAWER_CLOSE };
}