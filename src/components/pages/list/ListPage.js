import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { Controls } from './Controls'
import ItemList from './ItemList'
import { fetchItems } from '../../../api'

class ListPage extends PureComponent {
    componentDidMount() {
        this.props.fetchItems()
    }

    render() {
        return (
            <div className="box is-shadowless">
                <Controls />
                <ItemList />
            </div>
        )
    }
}

export default connect(
    null,
    {
        fetchItems
    }
)(ListPage)
