import React from 'react'
import Img from '../img/pikachu.png'
import Title from './description_title'
import Info from './description_info'
import Type from './description_type'
import Foot from './description_foot'

function Description(props){
    return (
        <div className="description hidden" id="description">
                <Title click={props.click}></Title>
                <div className="description-main">
                    <div className="description-img">
                        <img src={Img} alt="pikachu"/>
                    </div>
                    <Info></Info>
                    <Info></Info>
                    <Type></Type>
                </div>
                <Foot></Foot>
        </div>
    )
}

export default Description