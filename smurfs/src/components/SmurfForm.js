import React, { useState } from 'react';
import styled from 'styled-components';
//need to import --> 
//connect
import {connect} from 'react-redux';
// {addSmurf} from actions
import {addSmurf} from '../actions/index';


//Data format to post smurf --> initial state/data
// {
//     name: 'Brainey',
//     age: 200,
//     height: '5cm'
//   }

const TextInput = styled.input`
    margin: 1% 3%;
    height: 40px;
    width: 100%;
    border-radius: 5px;
    font-size: 1rem;
    padding: 0 2%;
    border: 2px solid lightgrey;
`

const ButtonStyle = styled.button`
    width: 40%;
    height: 50px;
    margin: auto;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    background: #5ccc6e;
    color: #FFF;
    margin-top: 3%;
`

const SmurfForm = (props) => {
    //need useState to set state and initial data structure
    let [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: '',
    })


    //setup 'handleInputChange'
    const handleInputChange = (event) => {
        setNewSmurf({
            ...newSmurf,
            [event.target.name]: event.target.value
        })
    }


    //setup 'handleOnSubmit'
    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.addSmurf(newSmurf)
        // setNewSmurf({
        //     name: '',
        //     age: '',
        //     height: ''
        // })
        event.target.reset();
    }

    return (
        <div>
            <h1>Add a smurf!!</h1>
            {/* add 'handleOnSubmit' to 'form' */}
            <form onSubmit={handleOnSubmit}>
                <TextInput
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={newSmurf.name}
                onChange={handleInputChange}
                />
                <TextInput
                    type='text'
                    placeholder='Age'
                    name='age'
                    value={newSmurf.age}
                onChange={handleInputChange}
                />
                <TextInput
                    type='text'
                    placeholder='Height'
                    name='height'
                    value={newSmurf.height}
                onChange={handleInputChange}
                />
                <ButtonStyle onClick={() => console.log('Add Smurf Button submit click')}  type='submit'>Add smurf</ButtonStyle>
            </form>
        </div>
    )
}

//set up 'connect' --> and import 'addSmurf' from actions
export default connect(null, {addSmurf})(SmurfForm);

