import React from 'react'
import PropTypes from 'prop-types'

export const SearchBar = ({searchText, updateSearchText}) => {
    return <div>
        {searchText}
    </div>
}

SearchBar.propTypes = {
    searchText: PropTypes.string.isRequired,
    updateSearchText: PropTypes.func.isRequired
}