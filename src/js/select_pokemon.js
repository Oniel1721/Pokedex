const d = document;

const activator = function(target,api = false,action = false){
    target.classList.add("poke-active")
    target.focus()
    if(api){
        api(target.lastChild.textContent,true,action)
    }
}

const selectPokemonByKey = function (api = false,action = false){
    d.addEventListener("keyup", e => {
        if(e.key === "ArrowLeft" || e.key === "ArrowRight"){
            let current = d.querySelector(".poke-active")
            if(e.key === "ArrowLeft"){
                if(!current.textContent.includes("bulbasaur")){
                    current.classList.remove("poke-active")
                    activator(current.previousSibling,api,action)
                }
                else{
                    console.log("limite left")
                }  
            }
            if(e.key === "ArrowRight"){
                if(!current.textContent.includes("zeraora")){
                    current.classList.remove("poke-active")
                    activator(current.nextSibling,api,action)
                }
                else{
                    console.log("limite right")
                }  
            }
        }
    })
}

export default function selectPokemon(selector,api = false,action = false){
    d.addEventListener("click", e=>{
        if(e.target.matches(selector) || e.target.matches(selector+" *")){
            d.querySelector(".poke-active").classList.remove("poke-active")
            if(e.target.className.includes(selector.slice(1))){
                activator(e.target, api, action)      
            }
            else{
                activator(e.target.parentNode,api,action)
            }
        }
    })
    selectPokemonByKey(api,action)
}