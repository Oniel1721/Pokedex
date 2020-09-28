import React from 'react'
import { createNewTeam } from '../Team_data'

function NewTeam(){
    return (
        <div className="add-team-new cursor-boton" onClick={createNewTeam}>
            <p>+ New Team</p>
        </div>
    )
}

export default NewTeam