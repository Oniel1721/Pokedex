import React from 'react'
import Img from '../img/pikachu.png'
import Title from './description_title'
import Info from './description_info'
import Type from './description_type'
import Foot from './description_foot'

function Description(){
    return (
        <div className="description hidden" id="description">
            <Title></Title>
            <div className="description-main">
                <div className="description-img">
                    <img src={Img} alt='img'/>
                </div>
                <div className="description-basic-info">
                    <Info direction="info-left" no="No:" name="Name:" weight="Weight:"></Info>
                    <Info direction="info-right" no="No:" name="Name:" weight="Weight:"></Info>
                </div>
                
                <Type></Type>
            </div>
            <Foot></Foot>
        </div>
    ) 
}

export default Description