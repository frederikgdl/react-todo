import { filters } from '../constants'

import {
    FETCH_ITEMS_REQUEST,
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_FAILURE,
    FILTER_ITEMS,
    DELETE_ITEM_REQUEST,
    DELETE_ITEM_SUCCESS,
    DELETE_ITEM_FAILURE,
    CHECK_ITEM_REQUEST,
    CHECK_ITEM_SUCCESS,
    CHECK_ITEM_FAILURE
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
        case DELETE_ITEM_REQUEST:
            return {
                ...state,
                pending: true
            }
        case DELETE_ITEM_SUCCESS: {
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.itemId),
                pending: false,
                error: null
            }
        }
        case DELETE_ITEM_FAILURE: {
            return {
                ...state,
                pending: false,
                error: action.error
            }
        }
        case CHECK_ITEM_REQUEST: {
            return {
                ...state,
                pending: true
            }
        }
        case CHECK_ITEM_SUCCESS: {
            return {
                ...state,
                items: state.items.map(
                    item =>
                        item.id === action.item.id ? { ...action.item } : item
                ),
                pending: false,
                error: null
            }
        }
        case CHECK_ITEM_FAILURE: {
            return {
                ...state,
                pending: false,
                error: action.error
            }
        }
        default:
            return state
    }
}

export default reducer
