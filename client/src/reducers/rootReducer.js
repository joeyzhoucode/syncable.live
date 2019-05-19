import {combineReducers} from 'redux';
import dashboard from './dashboardReducer';
import player from './playerReducer';

import image from "assets/img/faces/zhou.png";

export const initialState = {
  dashboard: {
    image: image,
    color: "purple",
    hasImage: true,
    fixedClasses: "dropdown show",
    mobileOpen: false
  },
  player: {
    connection: null,
    videoId: "https://www.youtube.com/watch?v=2S24-y0Ij3Y",
    videoSeek: null,
    videoState: "pause",
    player: null,
  },
  viewer: {
    name: "Guest",
    email: "guest@guest.com",
  }
};

const rootReducer = combineReducers({
  dashboard,
  player,
})

export default rootReducer;