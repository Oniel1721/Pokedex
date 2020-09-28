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

import { changeSelected, addPokemonTo} from '../Team_data'

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


const updateImg = function(sprite){
    let newImg = document.createElement("img")
    newImg.setAttribute("src",sprite)
    newImg.setAttribute("class","description-pkm-img")
    let oldImg = document.getElementsByClassName("description-img")[0].firstChild
    document.getElementsByClassName("description-img")[0].replaceChild(newImg,oldImg)
}

const updateInfo = function(id,name,weight){
    let info = document.getElementsByClassName("description-info")[1]
    info.firstChild.textContent = id
    info.firstChild.nextSibling.textContent = name
    info.lastChild.textContent = weight+" Lb"

}

const updateTypes = function(typeList){
    let types = document.getElementsByClassName("description-types")[0]
    while(types.childNodes.length >= 1){
        types.removeChild(types.childNodes[0])
    }
    
    for(let i = 0; i<typeList.length; i++){
        let p = document.createElement("p")
        p.setAttribute("class",typeList[i].type.name)
        p.textContent = typeList[i].type.name
        types.appendChild(p)
    }
}

const updateAbility = function(abilityInfo, name){
    let p = document.getElementById("description-ability")
    let h4 = document.getElementById("abilitie-name")
    h4.textContent = `Ability: ${name}`
    for(let i = 0; i<abilityInfo.effect_entries.length;i++){
        if(abilityInfo.effect_entries[i].language.name === "en"){
            p.textContent = abilityInfo.effect_entries[i].effect
            break;
        }
    }
}

const getAbilities = function(no=1, action=null){
    let xhttp = new XMLHttpRequest()
    xhttp.open("GET",`https://pokeapi.co/api/v2/ability/${no}`);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let abilityInfo = JSON.parse(this.responseText)
            action(abilityInfo,no)
        }
    }
}

const updateDescription = function(pokeInfo){
    updateImg(pokeInfo.sprites.front_default)
    updateInfo(pokeInfo.id,pokeInfo.name,pokeInfo.weight)
    updateTypes(pokeInfo.types)
    let selectAbility = parseInt(pokeInfo.abilities.length*Math.random())
    getAbilities(pokeInfo.abilities[selectAbility].ability.name,updateAbility)
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
                changeSelected(id,name,sprite)
                action(pokeInfo)
            }
            else{
                addPokemonToList(sprite,name,id)
                getApiInfo(no+=1)
            }
        }
    }
}

const addPokemonToTeam = function(){
    let table = document.getElementById("add-table");
    table.addEventListener('click', function(e){
        console.log('target:',e.target)
        if(e.target.className === "cursor-boton" && e.target.tagName === "div"){
            let name = e.target.childNodes[0].textContent;
            console.log("nombre get",name)
            addPokemonTo(name)
        } 
    })
}

class Pokedex extends React.Component{
    componentDidMount() {
        getApiInfo(1);
        selectPokemon();
        getApiInfo(1,true,updateDescription)
        //addPokemonToTeam()
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