import {combineReducers} from 'redux';
import home from './homeReducer';
import player from './playerReducer';
import profile from './profileReducer';

import image from "assets/img/faces/zhou.png";

export const initialState = {
  home: {
    color: "purple",
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
  profile: {
    firstName: "John",
    lastName: "Doe",
    email: "John@Doe.com",
    image: image,
  }
};

const rootReducer = combineReducers({
  home,
  player,
  profile,
})

export default rootReducer;