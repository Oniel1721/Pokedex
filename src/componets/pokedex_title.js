import React from 'react'
import { Link } from 'react-router-dom'

function Title(){
    return (
        <div className="pokedex-titles">
            <Link to="/menu">MENU</Link>
            <h2>POKEDEX</h2>
        </div>
    )
}

export default Title