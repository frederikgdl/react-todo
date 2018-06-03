import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

const NewButton = ({ goToPath }) => (
    <button
        className="button is-primary is-medium"
        onClick={() => goToPath('/new')}
    >
        + Add todo
    </button>
)

NewButton.propTypes = {
    goToPath: PropTypes.func.isRequired
}

export default connect(
    null,
    dispatch => ({
        goToPath: path => dispatch(push(path))
    })
)(NewButton)
