import {
    fetchItemsRequest,
    onFetchItemsSuccess,
    onFetchItemsFailure,
    deleteItemRequest,
    onDeleteItemSuccess,
    onDeleteItemFailure
} from '../actions'

const serverUrl = 'http://localhost:4000'
const fetchItemsUrl = `${serverUrl}/items`

export const fetchItems = () => async dispatch => {
    dispatch(fetchItemsRequest())
    try {
        const data = await asyncFetchItems()
        dispatch(onFetchItemsSuccess(data))
    } catch (e) {
        dispatch(onFetchItemsFailure(e))
    }
}

const asyncFetchItems = async () => {
    const response = await fetch(fetchItemsUrl)
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return response.json()
}

export const deleteItem = itemId => async dispatch => {
    dispatch(deleteItemRequest())
    try {
        await asyncDeleteItem(itemId)
        dispatch(onDeleteItemSuccess(itemId))
    } catch (e) {
        dispatch(onDeleteItemFailure())
    }
}

const asyncDeleteItem = async itemId => {
    const url = `${fetchItemsUrl}/${itemId}`
    const response = await fetch(url, { method: 'delete' })
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return response.json()
}
