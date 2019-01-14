import { combineReducers } from 'redux'
import movies from '../movie/reducer'

export const rootReducer = combineReducers({
    movies
})