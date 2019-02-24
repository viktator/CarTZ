import {combineReducers} from 'redux'
import { FETCH_FAILURE, FETCH_START, FETCH_SUCCESS} from './action'

export default combineReducers({
    loading(state = false, action) {
        const {type} = action
        switch (type) {
            case FETCH_START:
                return true
            case FETCH_SUCCESS:
            case FETCH_FAILURE:
                return false
            default:
                return state
        }
    },
    car(state = null, action) {
        const {type, payload} = action
        switch (type) {
            case FETCH_SUCCESS:
                return payload.result
            case FETCH_FAILURE:
                return null
            default:
                return state
        }
    }


})