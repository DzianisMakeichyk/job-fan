export const GET_API = 'GET_API';
export const GET_DETAILS = 'GET_DETAILS';

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

export function getDetails(id) {
    return async function (dispatch) {
        const res = await fetch(`http://localhost:3000/results/${id}`);
        const details = await res.json();

        return dispatch({
            type: 'GET_DETAILS',
            data: details,
        });
    }
}
