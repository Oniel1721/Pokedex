import React from 'react'
import Left from '../componets/team_left'
import Title from '../componets/team_title'
import Card from '../componets/team_card'
import Option from '../componets/team_option'

function Team(){
    return (
        <div class="team">
            <Left></Left>
            <Title></Title>
            <div class="team-pokemon">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
            <div class="team-options">
                <Option></Option>
            </div>
        </div>
    )
}

export default Team
