import React, {useEffect} from 'react';
import SmurfCard from './SmurfCard';


//need to import --> 'getSmurfData' from actions for smurf api data


const SmurfList = () => {
    //setup 'useEffect' to get initial load of state/data



    return(
        <div>
            <h3>Smurf List component --> display smurfs</h3>
            <SmurfCard />
        </div>
    )    
}

//add 'mapStateToProps'


//add connect
export default SmurfList;