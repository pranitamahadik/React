import React from 'react';

// function Greet() {
//     return <h1>Hello Pranita</h1>
// }

const Greet = props => {
    return (
        <h1>Hello {props.name}</h1>
    )
}

export default Greet;