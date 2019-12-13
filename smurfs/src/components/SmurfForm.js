import React from 'react';

const SmurfForm = () => {



    //setup 'handleInputChange'



    //setup 'handleOnSubmit'


    return(
        <div>
            <h1>Smurf Form Component --> add smurf</h1>
            <form>
                <input 
                    type='text'
                    placeholder='Name'
                    name='name'
                    // value={}
                    // onChange={}
                />
                <input 
                    type='text'
                    placeholder='Age'
                    name='age'
                    // value={}
                    // onChange={}
                />
                <input 
                    type='text'
                    placeholder='Height'
                    name='height'
                    //value={}
                    //onChange={}
                />
            </form>
        </div>
    )
}

export default SmurfForm;

//Data format to post smurf --> initial state/data
// {
//     name: 'Brainey',
//     age: 200,
//     height: '5cm'
//   }