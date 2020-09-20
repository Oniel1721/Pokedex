import React from 'react'
import Avatar from './menu_user_avatar'
import Info from './menu_user_info'

function User(){
    return (
        <div className="menu-user">
            <Avatar></Avatar>
            <Info></Info>
        </div>
    )
}

export default User