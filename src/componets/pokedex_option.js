import React from 'react'
import img from '../img/description.png'

function Option(){
    return (
        <div className="pokedex-description pokedex-options-item cursor-boton">
            <img src={img} alt="description"/>
            <p>Description</p>
        </div>
    )
}

export default Option