import { FETCH_POSTS, NEW_POST, CATEGORIES } from '../actions/types';


const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action) {
    // console.log('====1===',action.type);
    switch (action.type) {
        case CATEGORIES:
            return {
                ...state,
                cats: action.payload
            }
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}
