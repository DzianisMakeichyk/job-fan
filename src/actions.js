export const GET_API = 'GET_API';

export function getApi() {
    return async function (dispatch) {
        // const res = await fetch('https://pencilsharpener.pl/api/testApi.json');
        const res = await fetch('http://localhost:3000/results');
        const dates = await res.json();

        return dispatch({
            type: 'GET_API',
            data: dates,
        });
    }
}