import React from 'react'
import error from "../../assets/error.png"
import Button from '../Button/Button'
import "./index.css"
function Error() {
    return (
        <div className='error-container'>
            <img className='error' src={error} alt="error"/>
            <p>Failed to load Products</p>
            <Button>
                RETRY
            </Button>        </div>
    )
}

export default Error
