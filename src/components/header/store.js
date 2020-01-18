import { SEARCH_FOCUS } from '../../store/actionCreate'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    searchList: []
})

export default (state = defaultState, action) => {
    if (action.type === SEARCH_FOCUS) {
        state = defaultState.set('focused', action.value)
    }
    if (action.type === 'get_search_list') {
        state = defaultState.set('searchList', fromJS(action.value))
    }
    return state
}
