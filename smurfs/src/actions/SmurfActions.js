import axios from 'axios';

//Action Types --> go here ↓
export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';


//Action Creators (async action creator) -->  go here ↓
// get smurf data from localhost api --> http://localhost:3333/smurfs

const getSmurfData = () => dispatch => {
    console.log('in getSmurf data')
    dispatch({type: FETCH_SMURF_START});
    axios.get('http://localhost:3333/smurfs')
        .then(response => {
            console.log(response)
            dispatch({type: FETCH_SMURF_SUCCESS, payload: response.data})
        })
        .catch(error => {
            dispatch({type: FETCH_SMURF_FAILURE, payload: error.response})
        })

        //add 'addSmurf' action to post new smurf here ↓
}

export default getSmurfData;