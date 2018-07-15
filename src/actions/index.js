export const GET_API = 'GET_API';
export const GET_DETAILS = 'GET_DETAILS';
export const STATE_DETAILS = 'STATE_DETAILS';

export function getApi() {
    return async function (dispatch) {
        const res = await fetch('http://localhost:3000/results');
        const dates = await res.json();

        return dispatch({
            type: 'GET_API',
            data: dates,
        });
    }
}

export function getDetails(slug) {
    return async function (dispatch) {
        const res = await fetch(`http://localhost:3000/results/?slug=${slug}`);
        const details = await res.json();

        return dispatch({
            type: 'GET_DETAILS',
            data: details,
        });
    }
}

export function stateDetails(stateDetails) {
    return async function (dispatch) {
        const details = await stateDetails;
        return dispatch({
            type: 'STATE_DETAILS',
            data: details,
        });
    }
}
