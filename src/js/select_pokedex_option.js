const d = document;

const show = function(target){
    if(target.className.includes("cursor-boton")){
        let selector;
        if(target.textContent.toLowerCase() === "description"){
            selector = "#"+target.textContent.toLowerCase()
        }
        else if(target.textContent.toLowerCase() === "add"){
            selector = "#"+target.textContent.toLowerCase()+"-team"
        }
        else{
            if(target.parentNode.className.includes("description")){
                selector = "#description"
            }
            else{
                selector = "#add-team"
            }
        }
        d.querySelector(selector).classList.toggle("hidden")
    }
    else if(target.className.includes("search")){
        d.querySelector(".search-input").focus()
    }
}

export default function selectOption(selector){
    d.addEventListener("click", e=>{
        if(e.target.matches(selector) || e.target.matches(selector+" *") || e.target.matches(".closer")){
            let current;
            if(e.target.className.includes(selector.slice(1))||e.target.matches(".closer")){
                current = e.target;     
            }
            else{
                current = e.target.parentNode;
            }
            show(current)
        }
    })
}