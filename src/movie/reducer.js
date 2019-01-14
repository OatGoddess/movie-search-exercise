import {
    UPDATE_SEARCH_TEXT,
    FILTER_MOVIES
} from './actions'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    items: ['test1', 'test2'],
    searchText: 'search'
})

export default function movies(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_SEARCH_TEXT:
      return state.set('searchText', fromJS(action.text))
    case FILTER_MOVIES:
      return state.set('items', fromJS(action.movies))
    default:
      return state
  }
}