import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SmurfCard from './SmurfCard';
import Loader from 'react-loader-spinner';


//need to import --> 'getSmurfData' from actions for smurf api data
import {getSmurfData, addSmurf} from '../actions/index';


const SmurfList = (props) => {
    console.log('in SmurfList', props)
    //setup 'useEffect' to get initial load of state/data
    
    useEffect(() => {
        props.getSmurfData();
    }, [getSmurfData])


    return (
        <div>
            {/* <h1>{props.greeting}</h1> */}
            {props.isFetching &&
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
            />}
            {props.smurfs.map(smurf => {
            return <SmurfCard key={smurf.id} smurf={smurf} /> 
            })}
        </div>
    )
}

//add 'mapStateToProps'
const mapStateToProps = (state) => {
    //mimic 'initialState' structure for state
    return {
        // greeting: state.greeting,
        isFetching: state.isFetching,
        error: state.error,
        smurfs: state.smurfs
    }
}


//add connect --> make sure to add 'getSmurfData' to {} so it gets passed to props
export default connect(mapStateToProps, { getSmurfData, addSmurf })(SmurfList);