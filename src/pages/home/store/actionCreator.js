import axios from 'axios'
import { CHANGE_LIST, UPDATE_HOME } from './constants'

export const getHomeData = (value) => ({
    type: CHANGE_LIST,
    value
})

export const getList = () => ((dispatch) => {
    axios.get('/api/content-list.json')
        .then(res => {
            // dispatch(getHomeData(res.data.data))
            console.log(res,'-----测试')
        })
        .catch(err => {
            console.log(err)
        })
})

export const upHomeData = (value) => ({
    type: UPDATE_HOME,
    value
})

export const updateHomeLs = () => ((dispatch) => {
    axios.get('/api/content-list.json')
        .then(res => {
            dispatch(upHomeData(res.data.data.contentList))
        })
        .catch(err => {
            console.log(err)
        })
})
