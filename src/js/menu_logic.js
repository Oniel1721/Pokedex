import { getTeamsLength } from './team_logic'

import avatar1 from '../img/pikachu.png'
import avatar2 from '../img/pokeball.jpg'
import avatar3 from '../img/pokedex.png'
import avatar4 from '../img/busqueda.png'


const d = document;

let userName = "Trainer"

export const updateUserInfo = function(){
    let menuInfo = d.querySelectorAll(".menu-info")
    menuInfo[0].textContent = `NAME: ${userName}`
    menuInfo[1].textContent = `TEAMS: ${getTeamsLength()}`
}

let avatars = [avatar1,avatar2,avatar3,avatar4]
let avatarId = parseInt(avatars.length/2)

export const updateAvatar = function(){
    d.querySelector("#avatar-img").setAttribute("src", `${avatars[avatarId]}`)
}

export const leftAvatar = function(){
    avatarId -= 1;
    if(avatarId === -1){
        avatarId = avatars.length-1
    }
    updateAvatar()
}

export const rightAvatar = function(){
    avatarId += 1;
    if(avatarId === avatars.length){
        avatarId = 0
    }
    updateAvatar()
}

export const changeName = function(){
    let newName = prompt("Input your name.")
    if(newName){
        if(newName.length <= 16){
            userName = newName
            updateUserInfo()
        }
        else{
            alert("new name cant be over 16 characters")
        }
    }
}
