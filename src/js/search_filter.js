const d = document;

export default function searchFilters(target, selector, key){
    if(key === "Escape"){
        target.value = ""
    }

    d.querySelectorAll(selector).forEach((el) =>  el.textContent.toLowerCase().includes(target.value) ? el.classList.remove("filter") : el.classList.add("filter"))
}