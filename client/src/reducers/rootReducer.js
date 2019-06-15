import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import home from './homeReducer';
import player from './playerReducer';
import profile from './profileReducer';
import navigator from './navigatorReducer';

export const initialState = {
  home: {
    theatres: [],
    newTheatreCode: null,
  },
  player: {
    videoId: "https://www.youtube.com/watch?v=EoHwMlxmQkE",
    videoState: "pause",
    connection: null,
    player: null,
  },
  profile: {
    id: null,
    firstName: "John",
    lastName: "Doe",
    email: "John@Doe.com",
    image: null,
  },
  navigator: {
    color: "purple",
    fixedClasses: "dropdown show",
    mobileOpen: false,
    connection: null,
    messages: [],
    messageInput: "",
  }
};

export default(history) => combineReducers({
  router: connectRouter(history),
  home,
  player,
  profile,
  navigator,
})