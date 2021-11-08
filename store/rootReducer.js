import { combineReducers } from 'redux'
import themeReducer from './reducers/themeReducer'
import adsReducer from './reducers/adsReducer'

export default combineReducers({
  themeReducer,
  adsReducer
})