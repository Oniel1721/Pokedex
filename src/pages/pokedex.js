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

const changeImg = function(sprite){
    let newImg = document.createElement("img")
    newImg.setAttribute("src",sprite)
    let oldImg = document.getElementsByClassName("description-img")[0].firstChild
    document.getElementsByClassName("description-img")[0].replaceChild(newImg,oldImg)
}

const updateDescription = function(pokeInfo){
    changeImg(pokeInfo.sprites.front_default)

    /* Changing info */
    let info = document.getElementsByClassName("description-info")[1]
    info.firstChild.textContent = pokeInfo.id
    info.firstChild.nextSibling.textContent = pokeInfo.name
    info.lastChild.textContent = pokeInfo.weight+" Lb"

    /* types */
    let types = document.getElementsByClassName("description-types")[0]
    while(types.childNodes.length >= 1){
        types.removeChild(types.childNodes[0])
    }
    
    for(let i = 0; i<pokeInfo.types.length; i++){
        let p = document.createElement("p")
        p.setAttribute("class",pokeInfo.types[i].type.name)
        p.textContent = pokeInfo.types[i].type.name
        types.appendChild(p)
    }

}

const selectPokemon = function(){
    let ul = document.getElementById("poke-list");
    ul.addEventListener("click",function(e){
        if (e.target.classList.contains("pokemon")){
            document.getElementById("active").removeAttribute("id")
            e.target.setAttribute("id","active")
            getApiInfo(e.target.lastChild.textContent,true,updateDescription)
        }
        if (e.target.tagName === "ul"){
            return 0
        }
        else{
            document.getElementById("active").removeAttribute("id")
            e.target.parentNode.setAttribute("id","active")
            getApiInfo(e.target.parentNode.lastChild.textContent,true,updateDescription)
        }
    })
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
    if(parseInt(id) === 1){
        li.setAttribute("id","active")
    }
    li.setAttribute("class","cursor-boton pokemon")
    img.setAttribute("src",sprite)
    p1.textContent = `No: ${id}`
    p2.textContent = `${name}`
    li.appendChild(img)
    li.appendChild(p1)
    li.appendChild(p2)
    ul.appendChild(li)
}

const getApiInfo = function(no=1, just = false, action = null){
    if(no>807){
        return 0
    }
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET",`https://pokeapi.co/api/v2/pokemon/${no}`);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let pokeInfo = JSON.parse(this.responseText)
            let id = pokeInfo.id,
                name = pokeInfo.name,
                sprite = pokeInfo.sprites.front_default;
            if(just){
                action(pokeInfo)
            }
            else{
                addPokemonToList(sprite,name,id)
                getApiInfo(no+=1)
            }
        }
    }
}

class Pokedex extends React.Component{
    componentDidMount() {
        getApiInfo(1);
        selectPokemon();
        getApiInfo(1,true,updateDescription)
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