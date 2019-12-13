import React from 'react'
import styled from 'styled-components';

const CardWrapper = styled.div`
    margin: 3% 0;
    display: flex;
    justify-content: center;

`
const CardContainer = styled.div`
    border-radius: 5px;
    background: dodgerblue;
    color: #FFF;
    width: 80%;

    &:hover {
        background: salmon;
    }
`

const SmurfCard = (props) => {
    console.log(props)
    const { name, age, height } = props.smurf;
    return (
        <CardWrapper>
            <CardContainer>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Height: {height}</p>
            </CardContainer>
        </CardWrapper>
    )
}

export default SmurfCard;

// smurf:
// age: 200
// height: "5cm"
// id: 0
// name: "Brainey"