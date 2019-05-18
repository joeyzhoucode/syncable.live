import {combineReducers} from 'redux';
import dashboard from './dashboardReducer';
import player from './playerReducer';
import viewer from './viewerReducer';

const rootReducer = combineReducers({
  dashboard,
  player,
  viewer,
})

export default rootReducer;