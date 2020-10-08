import { addPokemonToList } from './add_pkm'

/* Api de pokemon 
https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807

id
name
species name
sprites   front_default
types name
*/
let lastPkm = 807;

export const getApiInfo = function(no = false, just = false, action = null){
    if(no === false){
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
                if(no<lastPkm){
                    getApiInfo(no+=1)
                }
                else{
                    console.log("All Pokemos Ready")
                }
            }
        }
    }
}
