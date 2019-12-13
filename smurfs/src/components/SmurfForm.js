import React, { useState } from 'react';
import styled from 'styled-components';
//need to import --> 
//connect
import {connect} from 'react-redux';
// {addSmurf} from actions
import {addSmurf} from '../actions/SmurfActions';


//Data format to post smurf --> initial state/data
// {
//     name: 'Brainey',
//     age: 200,
//     height: '5cm'
//   }

const TextInput = styled.input`
    font-size: 1.4rem;
    margin: 2% 2%;
`
const ButtonStyle = styled.button`
    background: green;
    color: #FFF;
    width: 20%;
    height: 45px;
    border-radius: 5px;
    font-size: 1.4rem;
`

const SmurfForm = (props) => {
    //need useState to set state and initial data structure
    let [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
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
        setNewSmurf({
            name: '',
            age: '',
            height: ''
        })
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
                // value={}
                onChange={handleInputChange}
                />
                <TextInput
                    type='text'
                    placeholder='Age'
                    name='age'
                // value={}
                onChange={handleInputChange}
                />
                <TextInput
                    type='text'
                    placeholder='Height'
                    name='height'
                // value={}
                onChange={handleInputChange}
                />
                <ButtonStyle onClick={() => console.log('Add Smurf Button submit click')}  type='submit'>Add smurf</ButtonStyle>
            </form>
        </div>
    )
}

//set up 'connect' --> and import 'addSmurf' from actions
export default connect(null, {addSmurf})(SmurfForm);

