var descriptionOn = false;
var addTeamOn = false;

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

const showAllTeams = function(){
    let allTeams = document.getElementById("all-teams");
    allTeams.classList.toggle("active")
}