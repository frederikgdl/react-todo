import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

export const history = createHistory()

const middleware = [thunk, routerMiddleware(history)]

const composeEnhancers = composeWithDevTools({})

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
)

export default store
