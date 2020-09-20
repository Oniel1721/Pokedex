import React from 'react'
import Logo from '../componets/intro_logo'
import Title from '../componets/intro_title'
import Start from '../componets/intro-start'

function Intro(){
    return (
        <div className="intro">
            <Logo></Logo>
            <Title></Title>
            <Start></Start>
        </div>
    )
}

export default Intro