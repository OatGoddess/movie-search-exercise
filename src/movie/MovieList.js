import React from 'react'
import { connect } from 'react-redux'

const MovieList = ({movies}) => {
    console.log('movies: ', movies)
    return <div>
        {movies}
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