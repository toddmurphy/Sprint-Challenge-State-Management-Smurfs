//import action types from 'SmurfActions'
import {FETCH_SMURF_START, 
    FETCH_SMURF_SUCCESS, 
    FETCH_SMURF_FAILURE} from '../actions';

import {ADD_SMURF_START, 
    ADD_SMURF_SUCCESS, 
    ADD_SMURF_FAILURE} from '../actions'

//setup 'initialState'
const initialState = {
    // greeting: 'hi, from the smurfs',
    isFetching: false,
    error: '',
    smurfs: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURF_START:
            return{
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_SMURF_SUCCESS:
            return{
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ''
            }
        case FETCH_SMURF_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }
//add 'addSmurf' here
        case ADD_SMURF_START:
            return{
                ...state,
                isFetching: true,
                error: '',
                smurfs: null
            }
        case ADD_SMURF_SUCCESS:
            console.log('in ADD_SMURF_SUCCESS')
            return{
                ...state,
                isFetching: false,
                error: '',
                smurfs: action.payload
            }
        case ADD_SMURF_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }


        default:
            return state;
    }
}

export default rootReducer;