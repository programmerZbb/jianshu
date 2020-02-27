import { fromJs } from 'immutable'

const $$defaultState = fromJs({
    dataList: [],
    navList: [],
    authorList: []
})

export const reducer = (state = $$defaultState, action) => {
    switch (action.type) {
        default: 
            return state
    }
}