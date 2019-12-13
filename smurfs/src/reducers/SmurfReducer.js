//import action types from 'SmurfActions'
import {FETCH_SMURF_START, 
    FETCH_SMURF_SUCCESS, 
    FETCH_SMURF_FAILURE} from '../actions/SmurfActions';


//setup 'initialState'
const initialState = {
    greeting: 'hi, from the smurfs',
    isFetching: false,
    error: '',
    smurfs: []
}

const SmurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURF_START:
            console.log('in SMURF START')
            return{
                ...state,
                isFetching: true
            }
        case FETCH_SMURF_SUCCESS:
            console.log('in SMURF SUCCESS')
            return{
                ...state,
                smurfs: action.payload,
                isFetching: false
            }

        default:
            return state;
    }
}

export default SmurfReducer;