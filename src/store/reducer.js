import headerReducer from '../components/header/store'
import homeReducer from '../pages/home/store'
import { combineReducers } from 'redux-immutable'

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer
})

export default reducer