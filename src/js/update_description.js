import { changePkmSelected } from './team_logic'

const d = document;

const updateImg = function(sprite){
    let newImg = d.createElement("img")
    newImg.setAttribute("src",sprite)
    newImg.setAttribute("class","description-pkm-img")
    let oldImg = d.getElementsByClassName("description-img")[0].firstChild
    d.getElementsByClassName("description-img")[0].replaceChild(newImg,oldImg)
}

const updateInfo = function(id,name,weight){
    let info = d.getElementsByClassName("description-info")[1]
    info.firstChild.textContent = id
    info.firstChild.nextSibling.textContent = name
    info.lastChild.textContent = weight+" Lb"

}

const updateTypes = function(typeList){
    let types = d.getElementsByClassName("description-types")[0]
    while(types.childNodes.length >= 1){
        types.removeChild(types.childNodes[0])
    }
    
    for(let i = 0; i<typeList.length; i++){
        let p = d.createElement("p")
        p.setAttribute("class",typeList[i].type.name)
        p.textContent = typeList[i].type.name
        types.appendChild(p)
    }
}

const updateAbility = function(name,abilityInfo = ""){
    let h4 = d.getElementById("abilitie-name")
    let p = d.getElementById("description-ability")
    h4.textContent = `Ability: ${name}`
    p.textContent = ""
    if(abilityInfo){
        for(let i = 0; i<abilityInfo.effect_entries.length;i++){
            if(abilityInfo.effect_entries[i].language.name === "en"){
                p.textContent = abilityInfo.effect_entries[i].effect
                break;
            }
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
            action(no,abilityInfo)
        }
    }
}

export const updateDescription = function(pokeInfo){
    updateImg(pokeInfo.sprites.front_default)
    updateInfo(pokeInfo.id,pokeInfo.name,pokeInfo.weight)
    updateTypes(pokeInfo.types)
    let selectAbility = parseInt(pokeInfo.abilities.length*Math.random())
    updateAbility("...")
    getAbilities(pokeInfo.abilities[selectAbility].ability.name,updateAbility)
    changePkmSelected(pokeInfo.id,pokeInfo.name,pokeInfo.sprites.front_default)
}