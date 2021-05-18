import axios from 'axios'
import {
  FETCH_RECENT_REQUEST,
  FETCH_RECENT_SUCCESS,
  FETCH_RECENT_FAILURE
} from './animeTypes'

export const fetchRecentAnimes = () => {

  const axiosConfig = {
    method: 'GET',
    url: 'https://simpleanime.p.rapidapi.com/anime/list/recent',
    headers: {
      'x-rapidapi-key': 'ab694c19f9mshab09163a3d9a44dp12c681jsn91b4b8015ff7',
      'x-rapidapi-host': 'simpleanime.p.rapidapi.com'
    }
  }


  return function (dispatch) {
    dispatch(fetchRecentRequest())
    axios
      .request(axiosConfig)      
      .then(response => {
        const animeArray = response.data.data
        const animes = animeArray.map(anime => anime)
        dispatch(fetchRecentSuccess(animes))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchRecentFailure(error.message))
      })
  }
}

export const fetchRecentRequest = () => {
  return {
    type: FETCH_RECENT_REQUEST,
  }
}

export const fetchRecentSuccess = animes => {
  return {
    type: FETCH_RECENT_SUCCESS,
    payload: animes
  }
}

export const fetchRecentFailure = error => {
  return {
    type: FETCH_RECENT_FAILURE,
    payload: error
  }
}
