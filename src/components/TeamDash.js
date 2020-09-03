import React from 'react'
import TeamBlock from './TeamBlock'

function TeamDash() {
    return (
        <div>
            <p>This is a team dashboard. It is only for managers</p>
            <TeamBlock userId="000001" />
            <TeamBlock userId="000002" />
            <TeamBlock userId="000003" />
        </div>
    )
}

export default TeamDash
