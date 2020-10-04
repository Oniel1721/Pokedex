const d = document;

export const addPokemonToList = function(sprite,name,id){
    let ul = d.getElementById("poke-list")
    let li = d.createElement("li")
    let img = d.createElement("img")
    let p1 = d.createElement("p")
    let p2 = d.createElement("p")
    li.setAttribute("class","cursor-boton pokemon")
    if(parseInt(id) === 1){
        li.classList.add("poke-active")
    }
    img.setAttribute("src",sprite)
    p1.textContent = `${id}`
    p2.textContent = `${name}`
    li.appendChild(p1)
    li.appendChild(img)
    li.appendChild(p2)
    ul.appendChild(li)
}