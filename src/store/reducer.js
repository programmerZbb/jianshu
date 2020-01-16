import { SEARCH_FOCUS } from './actionCreate'

const defaultState = {
    focused: false
}

export default (state = defaultState, action) => {
    if (action.type === SEARCH_FOCUS) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.focused = action.value
        return newState
    }
    return state
}