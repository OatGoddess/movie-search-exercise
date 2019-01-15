import {
  UPDATE_SEARCH_TEXT,
  RECEIVE_MOVIES,
  RECEIVE_ADDITIONAL_MOVIES
} from './actions'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  items: [],
  searchText: '',
  page: 1
})

export default function movies (state = defaultState, action) {
  switch (action.type) {
    case UPDATE_SEARCH_TEXT:
      return state.set('searchText', fromJS(action.text))
    case RECEIVE_MOVIES:
      if (action.movies) {
        return state.set('items', fromJS(action.movies))
      } else {
        return state.set('items', fromJS([]))
      }
    case RECEIVE_ADDITIONAL_MOVIES:
      let newMovies = state.get('items').toJS()
      newMovies.push.apply(newMovies, action.movies)
      return state.set('items', fromJS(newMovies))
    default:
      return state
  }
}
