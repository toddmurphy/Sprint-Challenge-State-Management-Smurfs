import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import SmurfCard from './SmurfCard';


//need to import --> 'getSmurfData' from actions for smurf api data


const SmurfList = (props) => {
    console.log(props)
    //setup 'useEffect' to get initial load of state/data



    return(
        <div>
            <h3>Smurf List component --> display smurfs</h3>
            <h1>{props.greeting}</h1>

            <SmurfCard />
        </div>
    )    
}

//add 'mapStateToProps'
const mapStateToProps = (state) => {
    //mimic 'initialState' structure for state
    return{
        greeting: state.greeting,
        isFetching: state.isFetching,
        error: state.error,
        smurfs: state.smurfs
    }
}


//add connect
export default connect(mapStateToProps, {})(SmurfList);