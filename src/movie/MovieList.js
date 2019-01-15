import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MovieCard from './MovieCard'
import './MovieList.css'

const MovieList = ({ movies }) => {
  console.log('movies: ', movies)
  let movieJSX = movies.map(x => <MovieCard key={x.title} movie={x} />)
  return <div className='movie-grid'>
    {movieJSX}
  </div>
}

const mapStateToProps = state => {
  return {
    movies: state.movies.get('items').toJS()
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList)

MovieList.propTypes = {
  movies: PropTypes.array
}
