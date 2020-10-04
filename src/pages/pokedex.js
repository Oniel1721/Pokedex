import React from 'react'
import ReactDOM from 'react-dom'
import Pokemon from '../componets/pokedex_pokemon'
import Title from '../componets/pokedex_title'
import Option from '../componets/pokedex_option'
import Description from '../componets/pokedex_description'
import Add from '../componets/pokedex_add'

import descriptionImg from '../img/description.png'
import searchImg from '../img/busqueda.png'
import addImg from '../img/boton-anadir.png'

import selectPokemon from '../js/select_pokemon'
import selectOption from '../js/select_pokedex_option'
import { getApiInfo } from '../js/get_api_info'
import { updateDescription } from '../js/update_description'
import { clickTeams } from '../js/team_logic'


class Pokedex extends React.Component{
    componentDidMount() {
        getApiInfo(1);
        getApiInfo(1,true,updateDescription)
        selectPokemon(".pokemon",getApiInfo,updateDescription)
        selectOption(".pokedex-options-item")
        clickTeams()
    }

    componentWillUnmount(){
        console.log("desmontado")
    }

    render(){
        return (
            <div className="pokedex" >
                <Title></Title>
                <div className="pokedex-show">
                    <ul id="poke-list">

                    </ul>
                </div>
                <div className="pokedex-options" >
                    <Option 
                    img={descriptionImg} 
                    alt="description" 
                    p="Description" 
                    search="f"/>

                    <Option 
                    img={addImg} 
                    alt="add"
                    p="Add" 
                    search="f" />

                    <Option 
                    img={searchImg} 
                    alt="search" 
                    p="" 
                    search="t"/>

                </div>
                <Description></Description>
                <Add></Add>
            </div>
        )
    }
}

export default Pokedex;