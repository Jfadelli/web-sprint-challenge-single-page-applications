import React from 'react'
import orderComplete from '../static/delivery.jpg'

export default function Confirmation() {
    return (
        <div>
            <h1> You're order is on the way!</h1>
            <img src={orderComplete} alt='bike food delivery' />
        </div>
    )
}