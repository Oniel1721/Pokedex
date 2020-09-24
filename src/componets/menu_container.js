import React from 'react'
import User from './menu_user'
import Option from './menu_option'
import pokedexImg from '../img/Pokedex.svg'
import pokeballImg from '../img/Pokeball.svg'

function Container(){
    return (
            <div className="menu-container">
                <User></User>
                <div className="menu-options">
                    <Option link="/pokedex" name="Pokedex" img={pokedexImg}/>
                    <Option link="/team" name="Team" img={pokeballImg}/>
                </div> 
            </div>
    )
}

export default Container