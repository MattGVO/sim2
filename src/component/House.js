import React from 'react';

function House(props){
    return(
        <div>
            <p>Property Name: {props.propertyName}</p>
            <p>Address: {props.address}</p>
            <p>City: {props.city}</p>
            <p>State: {props.state}</p>
            <p>Zip: {props.zip}</p>
            <button onClick={() =>{props.deleteHouse(props.propertyName)}}>Delete</button>
        </div>
    )
}

export default House;