import React from 'react'
import Avatar from './menu_user_avatar'

function Info(){
    return (
        <div className="menu-user-info">
            <h3 className="menu-info">NAME: <span contenteditable="">Trainer</span></h3>
            <h3 className="menu-info">TEAMS: 5</h3>
            <h3 className="menu-info">POKEDEX: 807</h3>
        </div>
    )
}

export default Info