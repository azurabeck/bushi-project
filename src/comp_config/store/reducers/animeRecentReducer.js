import {
    FETCH_RECENT_REQUEST,
    FETCH_RECENT_SUCCESS,
    FETCH_RECENT_FAILURE
  } from '../actions/animeTypes'
  
  const initialState = {
    loading: false,
    animes: [],
    error: ''
  }
 
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_RECENT_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_RECENT_SUCCESS:
        return {
          loading: false,
          animes: action.payload,
          error: ''
        }
      case FETCH_RECENT_FAILURE:
        return {
          loading: false,
          animes: [],
          error: action.payload
        }
      default: return state
    }
  }
  
  export default reducer
  