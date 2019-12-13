
//setup 'initialState'
const initialState = {
    greeting: 'hi, from the smurfs',
    isFetching: false,
    error: '',
    smurfs: []
}

const SmurfReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }


}

export default SmurfReducer;