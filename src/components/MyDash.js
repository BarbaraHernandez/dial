import React from 'react'
import MyBlock from './MyBlock'

function MyDash() {
    return (
        <div>
            <MyBlock blockType="hours"></MyBlock>
            <MyBlock blockType="vacay"></MyBlock>
            <MyBlock blockType="sick"></MyBlock>
        </div>
    )
}

export default MyDash
