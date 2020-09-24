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

let descriptionOn = false;
let addTeamOn = false;

const showDescription = function(){
    let description = document.getElementById("description");
    if(addTeamOn === false){
        description.classList.toggle("hidden");
        if(descriptionOn === false){
            descriptionOn = true;
        }
        else{
            descriptionOn = false;
        }
    }
}

const showAddTeam = function(){
    let addTeam = document.getElementById("add-team");
    if(descriptionOn === false){
        addTeam.classList.toggle("hidden");
        if(addTeamOn === false){
            addTeamOn = true;
        }
        else{
            addTeamOn = false;
        }
    }
}

/* Api de pokemon 
https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807

id
name
species name
sprites   front_default
types name
*/

const addPokemonToList = function(sprite,name,id){
    let ul = document.getElementById("poke-list")
    let li = document.createElement("li")
    let img = document.createElement("img")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    li.setAttribute("class","cursor-boton")
    img.setAttribute("src",sprite)
    p1.textContent = `No: ${id}`
    p2.textContent = `${name}`
    li.appendChild(img)
    li.appendChild(p1)
    li.appendChild(p2)
    ul.appendChild(li)
}

const api = function(no="1"){
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET",`https://pokeapi.co/api/v2/pokemon/${no}`);
    xhttp.send()

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let pokeInfo = JSON.parse(this.responseText)
            let id = pokeInfo.id,
                name = pokeInfo.name,
                sprite = pokeInfo.sprites.front_default;
            addPokemonToList(sprite,name,id)
            console.log(no+" agregado")
        }
    }
}

const getInfo = function(start,end){
    for(let i = start; i<=end; i++){
        let newPoke = api(i+'')
    }
}
let start = 1, end = 10;

class Pokedex extends React.Component{

    componentDidMount() {
        setInterval(function(){
            getInfo(start,end);
            if(end < 807-10){
                start+=10;
                end+=10
            }
            else{
                start = end+1
                end = 807
            }
        
        }, 750);

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
                    click={showDescription} 
                    p="Description" 
                    search="f"/>

                    <Option 
                    img={addImg} 
                    alt="add"
                    click={showAddTeam}  
                    p="Add" 
                    search="f" />

                    <Option 
                    img={searchImg} 
                    alt="search" 
                    p="" 
                    search="t"/>

                </div>
                <Description click={showDescription}></Description>
                <Add click={showAddTeam}></Add>
            </div>
        )
    }
}



export default Pokedex;