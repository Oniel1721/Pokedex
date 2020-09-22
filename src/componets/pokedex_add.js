import React from 'react'
import Team from './add_team.js'
import Title from './add_title'
import NewTeam from './add_new_team'

function Add(){
    return (
        <div className="add-team hidden" id="add-team">
                <Title></Title>
                <div className="add-team-table">
                    <Team></Team>
                    <Team></Team>
                    <Team></Team>
                </div>
                <NewTeam></NewTeam>
        </div>
    )
}

export default Add