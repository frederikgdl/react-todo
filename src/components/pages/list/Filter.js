import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { filters } from '../../../constants'
import { filterItems } from '../../../actions'

const Filter = ({ filter, filterItems }) => (
    <div className="field has-addons">
        <FilterButton
            filterType={filters.NOT_COMPLETED.value}
            filter={filter}
            onClick={filterItems}
            content={filters.NOT_COMPLETED.term}
        />
        <FilterButton
            filterType={filters.COMPLETED.value}
            filter={filter}
            onClick={filterItems}
            content={filters.COMPLETED.term}
        />
        <FilterButton
            filterType={filters.ALL.value}
            filter={filter}
            onClick={filterItems}
            content={filters.ALL.term}
        />
    </div>
)

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    filterItems: PropTypes.func.isRequired
}

const FilterButton = ({ filterType, filter, onClick, content }) => {
    const className = `button ${filterType === filter ? 'is-info' : ''}`

    return (
        <p className="control">
            <button className={className} onClick={() => onClick(filterType)}>
                {content}
            </button>
        </p>
    )
}

FilterButton.propTypes = {
    filterType: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired
}

export default connect(
    state => ({
        filter: state.items.filter
    }),
    {
        filterItems
    }
)(Filter)
