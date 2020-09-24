import React from 'react'
import { Link } from 'react-router-dom'

function Title(props){
    return (
        <div className="team-title">
            <Link to="/menu">MENU</Link>  
            <h2>Team name</h2>
            <h3 className="cursor-boton" onClick={props.click}>#</h3>
        </div>
    )
}

export default Title