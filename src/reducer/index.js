import { GET_API, GET_DETAILS, STATE_DETAILS, GET_MAIN, GUIDELINES } from '../actions'

const initialState = {
    dates: [],
    details: [],
    stateDetails: [],
    guidelineDetails: [],
    mainInfo: []
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
                stateDetails: data
            };
        case GUIDELINES:
            return {
                ...state,
                guidelineDetails: data
            };
        case GET_MAIN:
            return {
                ...state,
                mainInfo: data
            };
        default:
            return state;
    }
}