import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import searchFilters from './js/search_filter';
import selectPokemon from './js/select_pokemon';

const d = document

ReactDOM.render(<App></App>, document.querySelector('#root'));

d.addEventListener("DOMContentLoaded", e =>{
    searchFilters(".search-input",".pokemon")
})
