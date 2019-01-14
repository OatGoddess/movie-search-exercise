import React from 'react'
import { connect } from 'react-redux'
import { SearchBar } from '../components'
import { updateSearchText, fetchMovies } from './actions'
import PropTypes from 'prop-types'

const MovieSearchBar = ({ getMovies, searchText, updateSearchText }) => {
  return <SearchBar searchText={searchText} updateSearchText={updateSearchText} getResults={getMovies} />
}

const mapStateToProps = state => {
  return {
    searchText: state.movies.get('searchText')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateSearchText: text => {
      dispatch(updateSearchText(text))
    },
    getMovies: searchText => {
      dispatch(fetchMovies(searchText))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieSearchBar)

MovieSearchBar.propTypes = {
  searchText: PropTypes.string,
  updateSearchText: PropTypes.func,
  getMovies: PropTypes.func
}
