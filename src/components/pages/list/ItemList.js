import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ItemRow from './ItemRow'

const ItemList = ({ items, error }) => (
    <div>
        {!!error && <div>{error.message}</div>}
        {items.map(item => <ItemRow key={item.id} item={item} />)}
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
    })
}

export default connect(state => ({
    items: state.items.items,
    error: state.items.error
}))(ItemList)
