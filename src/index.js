import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import searchFilters from './js/search_filter'
import selectOption from './js/select_pokedex_option'
import { selectPokemon, selectPokemonByKey} from './js/select_pokemon'
import { createNewTeam, addPokemonTo, changeTeamSelected, activateLeft } from './js/team_logic'

import { getApiInfo } from './js/get_api_info'
import { updateDescription } from './js/update_description'
import { changeName } from './js/menu'

const d = document

ReactDOM.render(<App></App>, document.querySelector('#root'));

d.addEventListener("DOMContentLoaded", e =>{

    getApiInfo(1);
    // Eventos de teclado
    d.addEventListener("keyup", e=>{

        /* KEYUP IN MENU */

        if(e.target.matches(".menu-info span")){
            changeName(e.target.textContent)
        }


        /* KEYUP IN POKEDEX */
        
        //Search Filter

        if(e.target.matches(".search-input")){
            searchFilters(e.target,".pokemon", e.key)
        }

        //Select Pokemon

        if(e.key === "ArrowLeft" || e.key === "ArrowRight"){
            selectPokemonByKey(e.key,getApiInfo,updateDescription)
        }

    })

    // Eventos de click
    d.addEventListener("click", e=> {
        /* CLICKS IN POKEDEX */


        // Select Pokemon
        if(e.target.matches(".pokemon") || e.target.matches(".pokemon *")){
            selectPokemon(e.target,getApiInfo,updateDescription)
        }

        // Open a option and close it
        if(e.target.matches(".pokedex-options-item") || e.target.matches(".pokedex-options-item *") || e.target.matches(".closer")){
            selectOption(e.target)
        }

        // Create a new Team
        if(e.target.textContent==="+ New Team"){
            createNewTeam("name for the new team:",e.target)
        }

        // Add pokemon to a team
        if(e.target.matches(".list-of-teams") || e.target.parentNode.matches(".list-of-teams")){
            addPokemonTo(e.target.textContent.split(" : ")[0])
        }

        /* CLICKS IN TEAM */


        // Select Team
        if(e.target.matches(".team-in-list")){
            changeTeamSelected(e.target)
        }

        // Activate left menu
        if(e.target.matches(".on-off-left")){
            activateLeft()
        }

    })
})
