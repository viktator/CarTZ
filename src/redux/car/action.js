import api from '../../api'

export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

export const fetchCar = (number) => (dispatch) => {
    dispatch({
        type: FETCH_START
    });

    api.getCars(number)
        .then(res => res.json())
        .then(data => {
        dispatch({type: FETCH_SUCCESS, payload: data})
    }).catch(err => {
        dispatch({type: FETCH_FAILURE})
    })
}