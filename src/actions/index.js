export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST'
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS'
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE'

export const fetchItemsRequest = () => ({
    type: FETCH_ITEMS_REQUEST
})

export const onFetchItemsSuccess = items => ({
    type: FETCH_ITEMS_SUCCESS,
    items
})

export const onFetchItemsFailure = error => ({
    type: FETCH_ITEMS_FAILURE,
    error
})
