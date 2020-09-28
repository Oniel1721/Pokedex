/* Un array de objetos que contenga los nombres de los equipos, la cantidad de pokemon y otro array de objetos que contenga a los integrantes del equipo se guardara su numero, nombre y sprite */
import React from 'react'
import ReactDOM from 'react-dom'
import Team from './componets/add_team'


let selected;
const Teams = [];

export const changeSelected = function(id, name, sprite){
    selected = {
        id,
        name,
        sprite
    }
}

export const updateTable = function(){
    let table = document.getElementById("add-table")
    table.innerHTML = '';
    for (let i = 0; i<Teams.length; i++){
        let div = document.createElement("div")
        let p = document.createElement("p")
        div.setAttribute("class",'cursor-boton')
        div.setAttribute("onclick",`${addPokemonTo(Teams[i].name)}`)
        p.setAttribute("onclick",`${addPokemonTo(Teams[i].name)}`)
        p.textContent = `${Teams[i].name} : ${Teams[i].quantity}`
        div.appendChild(p)
        table.appendChild(div)
    }  
}

const isNewName = function(name){
    if(name){
        for(let i = 0; i<Teams.length; i++){
            if(Teams[i].name === name){
                return false
            }
        }
        return true
    }
    else{
        createNewTeam()
    }
}

const updateNewTeam = function(name){
    let newTeam = {
        name,
        quantity: 0,
        members: [],
    }
    Teams.push(newTeam)
}

export const createNewTeam = function(msg = "name for the new team:"){
    let name = prompt(msg)
    if(name !== null){
        if(isNewName(name)){
            updateNewTeam(name)
            console.log("nombre introducido",name)
            updateTable()
            return 0
        }
        else{
            createNewTeam("that name already exist, input other:")
        }
    }
}

export const addPokemonTo = function(teamName){
    console.log(teamName, " llego a la funcion")
    for(let i = 0; i<Teams.length; i++){
        if(teamName = Teams[i].name){
            console.log(teamName, " coincidio con ", Teams[i].name)
            if(Teams[i].members.length < 6){
                Teams[i].members.push(selected)
                Teams[i].quantity++;
                console.log(teamName, " list ", Teams[i].name)
                updateTable()
            }
            else{
                alert("that team is full")
            }
        }
    }
    /* no exist */
}