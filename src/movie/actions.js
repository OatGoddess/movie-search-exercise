import { apiKey } from '../config'

// action types
export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT'
export const REQUEST_MOVIES = 'REQUEST_MOVIES'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const RECEIVE_ADDITIONAL_MOVIES = 'RECEIVE_ADDITIONAL_MOVIES'

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

function receiveMovies (searchText, page, json) {
  return {
    type: RECEIVE_MOVIES,
    searchText,
    page,
    movies: json,
    receivedAt: Date.now()
  }
}

function receiveAdditionalMovies (searchText, page, json) {
  return {
    type: RECEIVE_ADDITIONAL_MOVIES,
    searchText,
    page,
    movies: json,
    receivedAt: Date.now()
  }
}

export function fetchMovies (searchText, page) {
  return function (dispatch) {
    if (searchText === '') {
      return dispatch(receiveMovies(searchText, page, []))
    }
    dispatch(requestMovies(searchText))
    let uri = `https://api.themoviedb.org/3/search/movie?page=${page}&include_adult=false&language=en-US&api_key=${apiKey}&query=${searchText}`

    return fetch(uri)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(receiveMovies(searchText, page, json.results))
      )
  }
}

export function fetchAdditionalMovies (searchText, page) {
  return function (dispatch) {
    dispatch(requestMovies(searchText))
    let uri = `https://api.themoviedb.org/3/search/movie?page=${page}&include_adult=false&language=en-US&api_key=${apiKey}&query=${searchText}`

    return fetch(uri)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(receiveAdditionalMovies(searchText, page, json.results))
      )
  }
}
