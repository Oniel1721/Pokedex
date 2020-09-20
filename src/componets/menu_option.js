import React from 'react'
import img from '../img/Pokedex.svg'

function Option(){
    return (
        <a href="pokedex.html">
            <p>nombre</p>
            <img src={img} alt="Pokedex"/>
        </a>
    )
}

export default Option
