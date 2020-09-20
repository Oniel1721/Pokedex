import React from 'react'
import GoBack from '../componets/menu_go_back'
import Container from '../componets/menu_container'


function Menu(){
    return (
        <div className="menu" >
            <GoBack></GoBack>
            <h1 className="menu-title">MENU</h1>
            <Container></Container>
        </div>
    )
}

export default Menu