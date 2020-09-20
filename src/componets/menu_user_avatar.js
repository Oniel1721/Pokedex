import React from 'react'
import avatarImg from '../img/pikachu.png'
import left from '../img/back.svg'
import right from '../img/next.svg'

function Avatar(){
    return (
        <div className="menu-user-img">
                <img src={avatarImg} alt="avatar"/>
                <div>
                        <img src={left} alt="left" className="menu-directions"/>
                        <img src={right} alt="right" className="menu-directions"/>
                </div>
            </div>
    )
}

export default Avatar