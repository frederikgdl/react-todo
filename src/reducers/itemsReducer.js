import { filters } from '../constants'

import {
    FETCH_ITEMS_REQUEST,
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_FAILURE,
    FILTER_ITEMS
} from '../actions'

const initialState = {
    items: [],
    pending: false,
    error: null,
    filter: filters.ALL.value
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITEMS_REQUEST:
            return {
                ...state,
                pending: true
            }
        case FETCH_ITEMS_SUCCESS:
            return {
                ...state,
                items: action.items,
                pending: false,
                error: null
            }
        case FETCH_ITEMS_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case FILTER_ITEMS:
            return {
                ...state,
                filter: action.filter
            }
        default:
            return state
    }
}

export default reducer
