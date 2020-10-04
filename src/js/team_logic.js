/* Un array de objetos que contenga los nombres de los equipos, la cantidad de pokemon y otro array de objetos que contenga a los integrantes del equipo se guardara su numero, nombre y sprite */


let pkmSelected;
let teamSelected;
const Teams = [];
const d = document;

const changeTeamSelected = function(element){
    console.log(element)
    teamSelected = element.textContent
    d.querySelector(".selected-in-list").classList.remove("selected-in-list")
    element.classList.add("selected-in-list")
}

export const readTeams = function(){
    let ul = d.querySelector(".teams-list")
    for(let i = 0; i<Teams.length; i++){
        let li = d.createElement("li")
        li.classList.add("team-in-list")
        li.textContent = Teams[i].name;
        ul.appendChild(li)
    }
}

export const changePkmSelected = function(id, name, sprite){
    pkmSelected = {
        id,
        name,
        sprite
    }
}

export const updateTable = function(){
    let table = d.getElementById("add-table")
    table.innerHTML = '';
    for (let i = 0; i<Teams.length; i++){
        let div = d.createElement("div")
        let p = d.createElement("p")
        div.setAttribute("class",'cursor-boton list-of-teams')
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
    return false
}

const updateNewTeam = function(name){
    let newTeam = {
        name,
        quantity: 0,
        members: [],
    }
    Teams.push(newTeam)
}

export const createNewTeam = function(msg = "name for the new team:", v = ""){
    let name = prompt(msg).toUpperCase()
    if(name !== null){
        if(isNewName(name)){
            updateNewTeam(name)
            updateTable()
            return 0
        }
        else{
            createNewTeam("that name already exist, input other:")
        }
    }
}

export const addPokemonTo = function(teamName){
    for(let i = 0; i<Teams.length; i++){
        if(teamName === Teams[i].name){
            if(Teams[i].members.length < 6){
                if(confirm(pkmSelected.name+" will be added to "+teamName)){
                    Teams[i].members.push(pkmSelected)
                    Teams[i].quantity++;
                    updateTable()
                }
            }
            else{
                alert("that team is full")
            }
        }
    }
}

const activateLeft = function(){
    d.getElementById("all-teams").classList.toggle("active");
}

export const clickTeams = function(run = true){
    if(run === false){
        return 0
    }
    d.addEventListener("click", e=>{
        console.log(e.target)
        if(e.target.textContent==="+ New Team"){
            createNewTeam("name for the new team:",e.target)
        }
        if(e.target.matches(".list-of-teams")){
            addPokemonTo(e.target.textContent.split(" : ")[0])
        }
        if(e.target.textContent === "#"){
            activateLeft()
        }
        if(e.target.matches(".team-in-list")){
            changeTeamSelected(e.target)
        }
    })
}