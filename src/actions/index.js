export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST'
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS'
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE'
export const FILTER_ITEMS = 'FILTER_ITEMS'
export const DELETE_ITEM_REQUEST = 'DELETE_ITEM_REQUEST'
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS'
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE'

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

export const filterItems = filter => ({
    type: FILTER_ITEMS,
    filter
})

export const deleteItemRequest = () => ({
    type: DELETE_ITEM_REQUEST
})

export const onDeleteItemSuccess = itemId => ({
    type: DELETE_ITEM_SUCCESS,
    itemId
})

export const onDeleteItemFailure = error => ({
    type: DELETE_ITEM_FAILURE,
    error
})
