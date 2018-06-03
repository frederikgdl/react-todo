import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { filters } from '../../../constants'
import { ItemRow } from './ItemRow'

const filterItem = (item, filter) => {
    switch (filter) {
        case filters.NOT_COMPLETED.value:
            return !item.checked
        case filters.COMPLETED.value:
            return item.checked
        case filters.ALL.value:
            return true
        default:
            return true
    }
}

const ItemList = ({ items, error, filter }) => (
    <div>
        {!!error && <div>{error.message}</div>}
        {items
            .filter(item => filterItem(item, filter))
            .map(item => (
                <ItemRow
                    key={item.id}
                    item={item}
                    onCheckItem={() => {}}
                    onDeleteItem={() => {}}
                />
            ))}
    </div>
)

ItemList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    ).isRequired,
    error: PropTypes.shape({
        message: PropTypes.string
    }),
    filter: PropTypes.string.isRequired
}

export default connect(
    state => ({
        items: state.items.items,
        error: state.items.error,
        filter: state.items.filter
    }),
    {}
)(ItemList)
