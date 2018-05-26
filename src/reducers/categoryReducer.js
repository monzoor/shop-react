import { GET_CATEGORIES } from '../actions/types';


const initialState = {
    categories: [],
}

export default function (state = initialState, action) {
    // console.log('====1===',action.type);
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state
    }
}
