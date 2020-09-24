import React from 'react'

function Title(props){
    return (
        <div className="add-team-title">
            <h3>Your Teams</h3>
            <p className="closer cursor-boton" onClick={props.click}>X</p>
        </div>
    )
}

export default Title