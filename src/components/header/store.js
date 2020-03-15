import { SEARCH_FOCUS, GET_SEARCH_LIST, MOUSE_IN, MOUSE_OUT, LIST_DATA, SHOW_BACK } 
    from './constants'
import { fromJS } from 'immutable'

const $$defaultState = fromJS({
    focused: false,
    searchList: [],
    page: 1,
    totalPage: 0,
    mouseIn: false,
    showBack: false
})

export default (state = $$defaultState, action) => {
    switch(action.type) {
        case SEARCH_FOCUS:
            return state.set('focused', action.value)
        case GET_SEARCH_LIST:
            return state.set('searchList', fromJS(action.value)).set('focused', true).set('totalPage', Math.ceil(action.value.length / 10))
        case MOUSE_IN:
            return state.set('mouseIn', true)
        case MOUSE_OUT:
            return state.set('mouseIn', false)
        case LIST_DATA:
            return state.set('page', action.value)
        case SHOW_BACK: 
            return state.set('showBack', action.value)
        default:
            return state    
    }
}
