import React from 'react'
export default function ThisOrder({ details }) {
    if (!details) {
        return <h3>Fetching your order details...</h3>
    }
    return (
        <div className='order container'>
            {console.log(details)}
            <p>Name: {details.name}</p>
            <p>Size: {details.size}</p>
            <p>Sauce: {details.sauce}</p>
            <p>Special Instructions: {details.specialInstructions}</p>
            {
                !!details.toppings && !!details.toppings.length &&
                <div>
                    toppings:
                    <ul>
                        {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
                    </ul>
                </div>
            }
        </div>
    )
}
