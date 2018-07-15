import { GET_API, GET_DETAILS, STATE_DETAILS } from '../actions'

const initialState = {
    dates: [],
    details: [],
    stateDetails: []
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
                details: data
            };
        case STATE_DETAILS:
            return {
                ...state,
                stateDates: data
            };
        default:
            return state;
    }
}