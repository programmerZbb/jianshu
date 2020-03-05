import { fromJS } from 'immutable'
import { CHANGE_LIST, UPDATE_HOME } from './constants'

const $$defaultState = fromJS({
    contentList: [],
    navList: [],
    authorList: []
})

const reducer = (state = $$defaultState, action) => {
    switch (action.type) {
        case CHANGE_LIST:
            return state.merge({
                contentList: fromJS(action.value.contentList),
                navList: fromJS(action.value.navList),
                authorList: fromJS(action.value.recommendList)
            })
        case UPDATE_HOME:
            return state.set('contentList', state.get('contentList').concat(fromJS(action.value)))
        default: 
            return state
    }
}

export default reducer