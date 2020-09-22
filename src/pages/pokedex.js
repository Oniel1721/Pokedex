import React from 'react'
import Pokemon from '../componets/pokedex_pokemon'
import Title from '../componets/pokedex_title'
import Option from '../componets/pokedex_option'
import Description from '../componets/pokedex_description'
import Add from '../componets/pokedex_add'

class Pokedex extends React.Component{
    render(){
        return (
            <div className="pokedex" >
                <Title></Title>
                <div className="pokedex-show">
                    <ul>
                        <Pokemon></Pokemon>
                    </ul>
                </div>
                <div className="pokedex-options" >
                    <Option></Option>
                    <Option></Option>
                    <Option></Option>
                </div>
                <Description></Description>
                <Add></Add>
            </div>
        )
    }
}

export default Pokedex;