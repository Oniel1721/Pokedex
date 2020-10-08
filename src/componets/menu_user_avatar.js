import React from 'react'
import avatar1 from '../img/pikachu.png'
import left from '../img/back.svg'
import right from '../img/next.svg'

function Avatar(){
    return (
        <div className="menu-user-img">
            <img src={avatar1} alt="avatar" id="avatar-img"/>
            <div>
                <img src={left} alt="left" className="menu-directions cursor-boton" id="to-left"/>
                <img src={right} alt="right" className="menu-directions cursor-boton" id="to-right"/>
            </div>
        </div>
    )
}

export default Avatar