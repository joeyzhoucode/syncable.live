import {combineReducers} from 'redux';
import dashboard from './dashboardReducer'
import player from './playerReducer'

const rootReducer = combineReducers({
  dashboard,
  player,
})

export default rootReducer;