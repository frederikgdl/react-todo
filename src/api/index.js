import {
    fetchItemsRequest,
    onFetchItemsSuccess,
    onFetchItemsFailure
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
