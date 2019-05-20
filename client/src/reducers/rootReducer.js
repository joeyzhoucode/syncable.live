import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import home from './homeReducer';
import player from './playerReducer';
import profile from './profileReducer';

export const initialState = {
  home: {
    color: "purple",
    fixedClasses: "dropdown show",
    mobileOpen: false,
    theatres: [],
    newTheatreCode: null,
  },
  player: {
    videoId: "https://www.youtube.com/watch?v=Y_MkhKaIOQI",
    videoState: "pause",
    connection: null,
    player: null,
  },
  profile: {
    id: 0,
    firstName: "John",
    lastName: "Doe",
    email: "John@Doe.com",
    image: null,
  }
};

export default(history) => combineReducers({
  router: connectRouter(history),
  home,
  player,
  profile,
})