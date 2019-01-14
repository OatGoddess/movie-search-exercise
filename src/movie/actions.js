import { apiKey } from '../config'

// action types
export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT'
export const REQUEST_MOVIES = 'REQUEST_MOVIES'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'

// actions
export function updateSearchText (text) {
  return { type: UPDATE_SEARCH_TEXT, text }
}

function requestMovies (searchText) {
  return {
    type: REQUEST_MOVIES,
    searchText
  }
}

function receiveMovies (searchText, json) {
  return {
    type: RECEIVE_MOVIES,
    searchText,
    movies: json,
    receivedAt: Date.now()
  }
}

export function fetchMovies (searchText) {
  return function (dispatch) {
    dispatch(requestMovies(searchText))
    console.log('searchText: ', searchText)
    let uri = `https://api.themoviedb.org/3/search/movie?page=1&include_adult=false&language=en-US&api_key=${apiKey}&query=${searchText}`

    console.log('uri: ', uri)

    return fetch(uri)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(receiveMovies(searchText, json.results))
      )
  }
}
