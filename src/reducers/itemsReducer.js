import {
    FETCH_ITEMS_REQUEST,
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_FAILURE
} from '../actions'

const initialState = {
    items: [],
    pending: false,
    error: null
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
        default:
            return state
    }
}

export default reducer
