/* Un array de objetos que contenga los nombres de los equipos, la cantidad de pokemon y otro array de objetos que contenga a los integrantes del equipo se guardara su numero, nombre y sprite */


let pkmSelected;
let teamSelected;
const Teams = [];
const d = document;

const readPokemonsInTeam = function(){
    for(let i = 0; i < Teams.length; i++){
        if(Teams[i].name === teamSelected){
            let container = d.querySelector(".team-pokemon")
            container.innerHTML = ""
            for(let j = 0; j < Teams[i].quantity; j++){
                let div1 = d.createElement("div")
                let img = d.createElement("img")
                let div2 = d.createElement("div")
                let p1 = d.createElement("p")
                let p2 = d.createElement("p")

                div1.setAttribute("class", "team-pokemon-card")
                img.setAttribute("src", `${Teams[i].members[j].sprite}`)
                p1.textContent = Teams[i].members[j].id
                p2.textContent = Teams[i].members[j].name

                div2.appendChild(p1)
                div2.appendChild(p2)
                div1.appendChild(img)
                div1.appendChild(div2)
                container.appendChild(div1)
            }
            return 0
        }
    }
}

export const changeTeamSelected = function(element){
    console.log(element)
    teamSelected = element.textContent
    d.querySelector(".selected-in-list").classList.remove("selected-in-list")
    element.classList.add("selected-in-list")
    readPokemonsInTeam()
}


export const readTeams = function(){
    let ul = d.querySelector(".teams-list")
    for(let i = 0; i<Teams.length; i++){
        let li = d.createElement("li")
        li.classList.add("team-in-list")
        if(i === 0){
            li.classList.add("selected-in-list")
            teamSelected = Teams[0].name
            readPokemonsInTeam()
        }
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

export const activateLeft = function(){
    d.querySelector("#all-teams").classList.toggle("active");
}