import axios from 'axios'
import { CHANGE_LIST } from './constants'

export const getHomeData = (value) => ({
    type: CHANGE_LIST,
    value
})

export const getList = () => ((dispatch) => {
    axios.get('/api/home-list.json')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
})
