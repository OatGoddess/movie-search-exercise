import React from 'react'
import MovieList from './MovieList'
import MovieSearchBar from './MovieSearchBar'

export const MovieSearchPage = (props) => {
    return <div>
        <MovieSearchBar />
        <MovieList />
    </div>
}