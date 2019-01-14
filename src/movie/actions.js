//action types
export const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT'
export const FILTER_MOVIES = 'FILTER_MOVIES'

//actions
export function updateSearchText(text) {
  return { type: UPDATE_SEARCH_TEXT, text }
}

export function filterMovies(movies) {
  return { type: FILTER_MOVIES, movies }
}