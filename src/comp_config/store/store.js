import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import { fetchRecentAnimes } from '../store/actions/recentAnime'
import rootReducer from './reducers/rootReducer'

const thunkMiddleware = require('redux-thunk').default



const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchRecentAnimes())
export default store
