import React from 'react'
import orderComplete from '../static/delivery.jpg'

export default function Confirmation(props) {
    const {
        order
    } = props
    return (
        <div>
            <h1> You're order is on the way!</h1>
            {order.map(item => {
                return (
                    <p key={item.id} details={item}> </p>
                )
            })}
            <img src={orderComplete} width="50%" alt='bike food delivery' />

        </div>
    )
}