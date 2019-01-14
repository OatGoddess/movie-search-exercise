import React from 'react'
import { connect } from 'react-redux'
import { SearchBar } from '../components'
import { updateSearchText } from './actions'

const MovieSearchBar = ({ searchText, updateSearchText }) => {
  return <SearchBar searchText={searchText} updateSearchText={updateSearchText} />
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
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieSearchBar)
