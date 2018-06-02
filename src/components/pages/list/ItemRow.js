import React from 'react'
import PropTypes from 'prop-types'

import './ItemRow.css'

const ItemRow = ({ item }) => (
    <div className="box level">
        <input
            type="checkbox"
            className={'todo-checkbox' + (item.checked ? ' is-checked' : '')}
            checked={item.checked}
            onChange={() => {}}
        />
        <div className="is-clipped ">{item.content}</div>
        <div className="field is-grouped">
            <p className="control">
                <button className="button is-danger is-medium">Delete</button>
            </p>
        </div>
    </div>
)

ItemRow.propTypes = {
    item: PropTypes.shape({
        checked: PropTypes.bool.isRequired,
        content: PropTypes.string.isRequired
    }).isRequired
}

export default ItemRow
