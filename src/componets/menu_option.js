import React from 'react'
import img from '../img/Pokedex.svg'
import { Link } from 'react-router-dom'

function Option(){
    return (
        <Link to="/pokedex">
            <p>nombre</p>
            <img src={img} alt="Pokedex"/>
        </Link>
    )
}

export default Option
