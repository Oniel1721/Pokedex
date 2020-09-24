import React from 'react'
import Search from '../componets/pokedex_option_search'

function Option(props){
    if (props.search === "f"){
        return (  
            <div className="pokedex-description pokedex-options-item cursor-boton" onClick={props.click}>
                <img src={props.img} alt={props.alt}/>
                <p>{props.p}</p> 
            </div>
        )
    }
    else{
        return (
            <div className="pokedex-description pokedex-options-item">
                <img src={props.img} alt={props.alt}/>
                <Search></Search>
            </div> 
            )      
        } 
}

export default Option

/*
<div class="pokedex-options" >
            <div class="pokedex-description pokedex-options-item cursor-boton" onclick="showDescription()">
                    <img src="img/description.png" alt="description">
                    <p>Description</p>
                </div>
                <div class="pokedex-add pokedex-options-item cursor-boton" onclick="showAddTeam()">
                    <img src="img/boton-anadir.png" alt="boton-anadir">
                    <p>Add to team</p>
                </div>
                <div class="pokedex-busqueda pokedex-options-item">
                    <img src="img/busqueda.png" alt="busqueda">
                    <p>Search: <span contenteditable="">Write here...</span></p>
                </div>
            </div>

*/