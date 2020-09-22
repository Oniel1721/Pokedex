import React from 'react'
import { Link } from 'react-router-dom'

function Start(){
    return (
        <Link to="/menu" className="intro-link">
            <h2 className="intro-start">PRESS START</h2>
        </Link>
    )
}

export default Start