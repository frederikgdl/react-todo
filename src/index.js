import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import registerServiceWorker from './registerServiceWorker'
import store, { history } from './store'
import App from './App'

import 'bulma/css/bulma.css'

const target = document.querySelector('#root')

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <React.Fragment>
                <App />
            </React.Fragment>
        </ConnectedRouter>
    </Provider>,
    target
)

registerServiceWorker()
