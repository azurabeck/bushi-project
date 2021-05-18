import { combineReducers } from 'redux'
import animeReducer from './animeRecentReducer'

const rootReducer = combineReducers({
  recentList: animeReducer
})

export default rootReducer
