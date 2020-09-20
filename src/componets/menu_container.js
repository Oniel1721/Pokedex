import React from 'react'
import User from './menu_user'
import Option from './menu_option'

function Container(){
    return (
            <div className="menu-container">
                <User></User>
                <div className="menu-options">
                    <Option></Option>
                    <Option></Option>
                </div> 
            </div>
    )
}

export default Container