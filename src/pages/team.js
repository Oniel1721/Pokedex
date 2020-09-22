import React from 'react'
import Left from '../componets/team_left'
import Title from '../componets/team_title'
import Card from '../componets/team_card'
import Option from '../componets/team_option'

class Team extends React.Component{
    render(){
        return (
            <div className="team">
                <Left></Left>
                <Title></Title>
                <div className="team-pokemon">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
                <div className="team-options">
                    <Option></Option>
                </div>
            </div>
        )        
    }
}

export default Team
