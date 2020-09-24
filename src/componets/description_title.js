import React from 'react'

function Title(props){
    return (
        <div className="description-title">
            <h2 >POKEMON INFO</h2>
            <p className="closer cursor-boton" onClick={props.click}>X</p>
        </div>         
    )
}

export default Title