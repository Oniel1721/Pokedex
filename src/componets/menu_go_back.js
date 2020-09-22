import React from 'react'
import logo from '../img/Logo.svg'
import { Link } from 'react-router-dom'

function GoBack(){
    return (
        <Link to="/intro" className="menu-link">
            <img src={logo} alt="Logo" className="menu-logo"/>
        </Link>
    )
}

export default GoBack