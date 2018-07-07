import { GET_API } from './actions'

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
        default:
            return state;
    }
}
