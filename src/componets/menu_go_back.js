import React from 'react'
import logo from '../img/Logo.svg'

function GoBack(){
    return (
        <a href="#" className="menu-link">
            <img src={logo} alt="Logo" className="menu-logo"/>
        </a>
    )
}

export default GoBack