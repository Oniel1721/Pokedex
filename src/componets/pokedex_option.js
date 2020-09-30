import React from 'react'
import Search from '../componets/pokedex_option_search'

function Option(props){
    if (props.search === "f"){
        return (  
            <div className="pokedex-description pokedex-options-item cursor-boton">
                <img src={props.img} alt={props.alt}/>
                <p>{props.p}</p> 
            </div>
        )
    }
    else{
        return (
            <div className="pokedex-description pokedex-options-item search">
                <img src={props.img} alt={props.alt}/>
                <Search></Search>
            </div> 
            )      
        } 
}

export default Option
