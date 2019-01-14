import {
  UPDATE_SEARCH_TEXT,
  RECEIVE_MOVIES
} from './actions'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  items: [],
  searchText: ''
})

export default function movies (state = defaultState, action) {
  switch (action.type) {
    case UPDATE_SEARCH_TEXT:
      console.log('updateText: ', action.text)
      return state.set('searchText', fromJS(action.text))
    case RECEIVE_MOVIES:
      let newMovies = action.movies.map(x => { return { title: x.title } })
      return state.set('items', fromJS(newMovies))
    default:
      return state
  }
}
