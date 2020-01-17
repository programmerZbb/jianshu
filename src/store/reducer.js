import headerReducer from '../components/header/store'
import { combineReducers } from 'redux'

const reducer = combineReducers({
    header: headerReducer
})

export default reducer