import React from 'react'
import { Link } from 'react-router-dom'

function Option(props){
    return (
        <Link to={props.link}>
            <p>{props.name}</p>
            <img src={props.img} alt="Pokedex"/>
        </Link>
    )
}

export default Option
