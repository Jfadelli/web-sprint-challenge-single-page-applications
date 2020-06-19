import React from 'react'
import { useHistory } from 'react-router-dom'
export default function HomePage() {
    const history = useHistory()
    const routeToForm = () => {
        if (true) {
            history.push('/form')
        } else {
            history.push('/')
        }
    }
    return (
        <div className='home-page'>
            <button onClick={routeToForm}
                className='md-button'>
                Make and Order!
            </button>
        </div>
    )
}