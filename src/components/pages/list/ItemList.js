import React from 'react'
import PropTypes from 'prop-types'

import ItemRow from './ItemRow'

export const ItemList = ({ items }) => (
    <div>{items.map(item => <ItemRow key={item.id} item={item} />)}</div>
)

ItemList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    ).isRequired
}
