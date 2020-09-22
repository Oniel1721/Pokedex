import React from 'react'
import img from '../img/pikachu.png'

function Pokemon(){
    return (
        <li className="cursor-boton">
            <img src={img} alt="pikachu"/>
            <p>No: 1</p>
            <p>Pikachu</p>
        </li>
    )
}

export default Pokemon