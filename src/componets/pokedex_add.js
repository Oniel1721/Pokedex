import React from 'react'
import Title from './add_title'
import NewTeam from './add_new_team'

function Add(){
    return (
        <div className="add-team hidden" id="add-team">
            <Title></Title>
            <div className="add-team-table" id="add-table">
                
            </div>
            <NewTeam></NewTeam>
        </div>
    )
}

export default Add