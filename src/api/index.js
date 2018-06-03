import { push } from 'react-router-redux'

import {
    fetchItemsRequest,
    onFetchItemsSuccess,
    onFetchItemsFailure,
    deleteItemRequest,
    onDeleteItemSuccess,
    onDeleteItemFailure,
    checkItemRequest,
    onCheckItemSuccess,
    onCheckItemFailure,
    addItemRequest,
    onAddItemSuccess,
    onAddItemFailure
} from '../actions'

const serverUrl = 'http://localhost:4000'
const itemsUrl = `${serverUrl}/items`

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
    const response = await fetch(itemsUrl)
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return response.json()
}

export const checkItem = item => async dispatch => {
    dispatch(checkItemRequest())
    try {
        const updatedItem = await asyncCheckItem(item)
        dispatch(onCheckItemSuccess(updatedItem))
    } catch (e) {
        dispatch(onCheckItemFailure(e))
    }
}

const asyncCheckItem = async item => {
    const url = `${itemsUrl}/${item.id}`
    const response = await fetch(url, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ checked: !item.checked })
    })
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
        dispatch(onDeleteItemFailure(e))
    }
}

const asyncDeleteItem = async itemId => {
    const url = `${itemsUrl}/${itemId}`
    const response = await fetch(url, { method: 'delete' })
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return response.json()
}

export const addItem = newContent => async dispatch => {
    dispatch(addItemRequest())
    try {
        const newItem = await asyncAddItem(newContent)
        await dispatch(onAddItemSuccess(newItem))
        dispatch(push('/'))
    } catch (e) {
        dispatch(onAddItemFailure(e))
    }
}

const asyncAddItem = async newContent => {
    const response = await fetch(itemsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ checked: false, content: newContent })
    })
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return response.json()
}
