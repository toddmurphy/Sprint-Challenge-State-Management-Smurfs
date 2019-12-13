import React from 'react'

const SmurfCard = (props) => {
    console.log(props)
    const { name, age, height } = props.smurf;
    return (
        <div>
            <h4>Individual smurf --> Brainy smurf</h4>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Height: {height}</p>
        </div>
    )
}

export default SmurfCard;

// smurf:
// age: 200
// height: "5cm"
// id: 0
// name: "Brainey"