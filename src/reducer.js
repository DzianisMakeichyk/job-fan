import { GET_API } from './actions'
import { GET_DETAILS } from './actions'

const initialState = {
    dates: []
};

export default function (state = initialState, action) {
    const { type, data } = action;

    switch(type) {
        case GET_API:
            return {
                ...state,
                dates: data
            };
        case GET_DETAILS:
            return {
                ...state,
                details: data,
            };
        default:
            return state;
    }
}
