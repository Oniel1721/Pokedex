import React from 'react'
import Left from '../componets/team_left'
import Title from '../componets/team_title'
import Card from '../componets/team_card'
import Option from '../componets/team_option'

import { readTeams } from '../js/team_logic'


class Team extends React.Component{

    componentDidMount() {
        readTeams()
    }

    render(){
        return (
            <div className="team">
                <Left></Left>
                <Title></Title>
                <div className="team-pokemon">
                    
                </div>
                <div className="team-options">
                    <Option name="Delete pkm"></Option>
                    <Option name="Delete team"></Option>
                </div>
            </div>
        )        
    }
}

export default Team
