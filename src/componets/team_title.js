import React from 'react'
import { Link } from 'react-router-dom'

function Title(){
    return (
        <div className="team-title">
            <Link to="/menu">MENU</Link>  
            <h2>Team name</h2>
            <h3 className="cursor-boton on-off-left">#</h3>
        </div>
    )
}

export default Title