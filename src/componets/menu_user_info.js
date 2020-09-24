import React from 'react'

function Info(props){
    return (
        <div className="menu-user-info">
            <h3 className="menu-info">NAME: <span contentEditable="">{props.name}</span></h3>
            <h3 className="menu-info">TEAMS: {props.teams}</h3>
            <h3 className="menu-info">POKEDEX: {props.pokedex}</h3>
        </div>
    )
}

export default Info