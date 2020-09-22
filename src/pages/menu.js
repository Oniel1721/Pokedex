import React from 'react'
import GoBack from '../componets/menu_go_back'
import Container from '../componets/menu_container'


class Menu extends React.Component{
    render(){
        return (
            <div className="menu" >
                <GoBack></GoBack>
                <h1 className="menu-title">MENU</h1>
                <Container></Container>
            </div>
        )
    }
}

export default Menu