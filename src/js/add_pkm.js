/* Lista de objetos con nombre img y numero*/ 

const d = document;

const pokeList = []

export const addPokemonToList = function(sprite,name,id){
    let newPoke = {
        sprite,
        name,
        id
    }
    pokeList.push(newPoke)
}

export const showPokemonInList = function(start = 0){
    let ul = d.querySelector("#poke-list")
    if(ul){
        for(let i = start; i<pokeList.length; i++){
            let li = d.createElement("li")
            let img = d.createElement("img")
            let p1 = d.createElement("p")
            let p2 = d.createElement("p")
            li.setAttribute("class","cursor-boton pokemon")
            if(parseInt(pokeList[i].id) === 1){
                li.classList.add("poke-active")
            }
            img.setAttribute("src",pokeList[i].sprite)
            p1.textContent = `${pokeList[i].id}`
            p2.textContent = `${pokeList[i].name}`
            li.appendChild(p1)
            li.appendChild(img)
            li.appendChild(p2)
            ul.appendChild(li)
            if(i === pokeList.length){
                console.log(i)
            }
        }
    }
}

export const autoUpdate = function(){
    let ul = d.querySelector("#poke-list")
    if(ul){
        if(ul.childNodes.length < pokeList.length){
            showPokemonInList(ul.childNodes.length)
        }   
    }
}