import React from 'react'

function Pokemon(props){
    return (
        <li className="cursor-boton">
            <img src={props.img} alt={props.name}/>
            <p>No: {props.no}</p>
            <p>{props.name}</p>
        </li>
    )
}

export default Pokemon