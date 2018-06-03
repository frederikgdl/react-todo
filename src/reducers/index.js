import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import itemsReducer from './itemsReducer'

export default combineReducers({
    routing: routerReducer,
    items: itemsReducer
})
