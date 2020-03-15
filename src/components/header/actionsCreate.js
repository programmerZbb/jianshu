import axios from 'axios'
import {
    MOUSE_IN,
    MOUSE_OUT,
    LIST_DATA,
    SHOW_BACK
} from './constants'

const getSearchList = (value) => (
    {
        type: 'get_search_list',
        value
    }
)

export const searchFocus = () => (
    {
        type: 'search_focus',
        value: true
    }
)

export const searchBlur = () => (
    {
        type: 'search_focus',
        value: false
    }
)

export const InitSearchLs = () => (
    (dispatch) => {
        axios.get('api/search-list.json').then(res => {
            dispatch(getSearchList(res.data))
        })
    }
)

export const mouseInAction = () => ({
    type: MOUSE_IN,
    value: true
})

export const mouseOutAction = () => ({
    type: MOUSE_OUT,
    value: false
})

export const getPage = (page) => ({
    type: LIST_DATA,
    value: page
})

export const backTopShow = (value) => ({
    type: SHOW_BACK,
    value
})