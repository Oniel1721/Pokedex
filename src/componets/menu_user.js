import React from 'react'
import Avatar from './menu_user_avatar'
import Info from './menu_user_info'

function User(){
    return (
        <div className="menu-user">
            <Avatar></Avatar>
            <Info name="......." teams={0} pokedex={0}></Info>
        </div>
    )
}

export default User