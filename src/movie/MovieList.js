import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MovieCard from './MovieCard'
import './MovieList.css'
import { fetchAdditionalMovies } from './actions'

class MovieList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pageNumber: 1,
      searchText: props.searchText
    }
    this.trackScrolling = this.trackScrolling.bind(this)
    this.isBottom = this.isBottom.bind(this)
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    if (nextProps.searchText !== prevState.searchText) {
      return {
        pageNumber: 1,
        searchText: nextProps.searchText
      }
    }
  }

  isBottom () {
    return ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight)
  }

  trackScrolling () {
    if (this.isBottom()) {
      document.removeEventListener('scroll', this.trackScrolling)
      this.setState(prevState => {
        return { pageNumber: prevState.pageNumber + 1 }
      },
      () => {
        this.props.loadMoreResults(this.props.searchText, this.state.pageNumber)
      })
    }
  }

  render () {
    let { movies } = this.props
    if (movies.length === this.state.pageNumber * 20) { document.addEventListener('scroll', this.trackScrolling) }
    let movieJSX = movies.map(x => <MovieCard key={x.id} movie={x} />)
    return <div className='movie-grid'>
      {movieJSX}
    </div>
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.get('items').toJS(),
    searchText: state.movies.get('searchText'),
    page: state.movies.get('page')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadMoreResults: (searchText, page) => {
      dispatch(fetchAdditionalMovies(searchText, page))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList)

MovieList.propTypes = {
  movies: PropTypes.array
}
