import React from 'react'
import './Modal.css'

const Modal = props => props.show ? <div onClick={props.onClick} className='Modal'></div> : null

export default Modal