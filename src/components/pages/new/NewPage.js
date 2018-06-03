/* eslint-disable jsx-a11y/no-autofocus */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addItem } from '../../../api'

class NewPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            content: ''
        }
    }

    handleChange = event => {
        this.setState({ content: event.target.value })
    }

    handleSubmit = () => {
        this.props.addItem(this.state.content)
    }

    render() {
        return (
            <div className="box is-shadowless">
                <h1 className="title">Add todo</h1>
                <div className="field">
                    <textarea
                        className="textarea"
                        onChange={this.handleChange}
                        autoFocus
                    />
                </div>
                <div className="field">
                    <button
                        className="button is-primary is-medium"
                        onClick={this.handleSubmit}
                    >
                        Save
                    </button>
                </div>
            </div>
        )
    }
}

NewPage.propTypes = {
    addItem: PropTypes.func.isRequired
}

export default connect(
    null,
    {
        addItem
    }
)(NewPage)
