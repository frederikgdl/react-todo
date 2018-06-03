import React from 'react'
import PropTypes from 'prop-types'

import './ItemRow.css'

export const ItemRow = ({ item, onCheckItem, onDeleteItem }) => (
    <div className="box level">
        <input
            type="checkbox"
            className={'todo-checkbox' + (item.checked ? ' is-checked' : '')}
            checked={item.checked}
            onChange={() => onCheckItem(item.id)}
        />
        <div
            className={
                'is-clipped' +
                (item.checked ? ' has-text-grey-light line-through' : '')
            }
        >
            {item.content}
        </div>
        <div className="field is-grouped">
            <p className="control">
                <button
                    className="button is-danger is-medium"
                    onClick={() => onDeleteItem(item.id)}
                >
                    Delete
                </button>
            </p>
        </div>
    </div>
)

ItemRow.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        checked: PropTypes.bool.isRequired,
        content: PropTypes.string.isRequired
    }).isRequired,
    onCheckItem: PropTypes.func.isRequired,
    onDeleteItem: PropTypes.func.isRequired
}
