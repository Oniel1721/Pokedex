import React from 'react'

function Info(props){
    return (
        <ul className="description-info">
            <li className={props.direction}>{props.no}</li>
            <li className={props.direction}>{props.name}</li>
            <li className={props.direction}>{props.weight}</li>
        </ul>        
    )
}

export default Info