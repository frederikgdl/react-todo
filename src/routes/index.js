import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ListPage from '../components/pages/list/ListPage'
import NewPage from '../components/pages/new/NewPage'
import { NotFound } from '../components/pages/NotFound'

export default () => (
    <div className="container">
        <Switch>
            <Route exact path="/" component={ListPage} />
            <Route exact path="/new" component={NewPage} />
            <Route component={NotFound} />
        </Switch>
    </div>
)
