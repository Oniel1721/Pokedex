const d = document;

let userName = "Trainer"
// let userTeams = 0;
// let Pokedex = 0;

export const changeName = function(value){
    if(value === ""){
        alert("You have to input your user name")
        userName = "Trainer"
    }
    else{
        userName = value;
    }
    console.log(userName)
}

export const updateUserInfo = function(){
    name = d.querySelector("#user-name")
    console.log(name)
    // name.textContent = userName
}