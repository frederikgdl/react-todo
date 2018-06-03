import {
    fetchItemsRequest,
    onFetchItemsSuccess,
    onFetchItemsFailure
} from '../actions'

const serverUrl = 'http://localhost:4000'
const fetchItemsUrl = `${serverUrl}/items`

export const fetchItems = () => dispatch => {
    dispatch(fetchItemsRequest())

    return fetch(fetchItemsUrl)
        .then(
            response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json()
            },
            error => {
                throw new Error(error)
            }
        )
        .then(json => {
            dispatch(onFetchItemsSuccess(json))
        })
        .catch(error => {
            dispatch(onFetchItemsFailure(error))
        })
}
