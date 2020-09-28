import React from 'react'
import { addPokemonTo } from '../Team_data'

function Team(props){
    return (
        <div className="cursor-boton" onClick={addPokemonTo(props.name)}>
            <p>{props.name}</p>
            <p>Pokemons: {props.number}</p>
        </div>
    )
}

export default Team