import React from 'react'
import sprite from '../img/pikachu.png'

function Card(){
    return (
        <div class="team-pokemon-card">
            <img src={sprite} alt="sprite"/>
            <div>
                <p>no</p>
                <p>name</p>
            </div>
        </div>
    )
}

export default Card