const d = document;

const activator = function(target,api = false,action = false){
    target.classList.add("poke-active")
    target.focus()
    if(api){
        api(target.lastChild.textContent,true,action)
    }
}

export const selectPokemonByKey = function (key,api = false,action = false){
    let current = d.querySelector(".poke-active")
    if(current){
        if(key === "ArrowLeft"){
            if(!current.textContent.includes("bulbasaur")){
                current.classList.remove("poke-active")
                activator(current.previousSibling,api,action)
            }
            else{
                console.log("limite left")
            }  
        }
        if(key === "ArrowRight"){
            if(!current.textContent.includes("zeraora")){
                current.classList.remove("poke-active")
                activator(current.nextSibling,api,action)
            }
            else{
                console.log("limite right")
            }
        }  
    }    
}

export const selectPokemon = function(target = false,api = false,action = false){
    d.querySelector(".poke-active").classList.remove("poke-active")
    if(target.className.includes("pokemon")){
        activator(target, api, action)
    }
    else{
        activator(target.parentNode,api,action)
    }
}