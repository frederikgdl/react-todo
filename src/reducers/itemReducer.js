import { CHECK_ITEM } from '../actions/itemActions'

const initialState = {
    items: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_ITEM:
            return {
                state
            }
        default:
            return state
    }
}

export default reducer
