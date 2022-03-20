import React from 'react'
import './Hamburger.css'

const Hamburger = props => {
    return (
        <div onClick={props.onClick} className='Hamburger'>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Hamburger