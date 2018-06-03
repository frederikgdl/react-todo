import React from 'react'
import { Route } from 'react-router-dom'
import NewPage from '../components/pages/new/NewPage'
import ListPage from '../components/pages/list/ListPage'

export default () => (
    <div className="container">
        <Route exact path="/" component={ListPage} />
        <Route exact path="/new" component={NewPage} />
    </div>
)
