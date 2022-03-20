import React, { Fragment } from 'react'
import './SideDrawer.css'
import Modal from '../../UI/Modal/Modal'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { withRouter } from 'react-router'

const SideDrawer = props => {

  let classes = ['Sidebar', props.show ? 'open' : 'close']

//   const goto = (event) => {
//     event.preventDefault()
//     // const { name } = event.target
//     props.onClick()
//     // props.history.push(name)
// }

  return (
    <Fragment>
      <Modal show={props.show} onClick={props.onClick} />
      <div className={classes.join(' ')}>
      <Nav vertical pills>
        <NavItem>
          <NavLink onClick={() => props.onClick()} name='/home' href="#home">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => props.onClick()} name='/aboutme' href="#aboutme">About me</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => props.onClick()} name='/whatiknow' href="#whatiknow">Knowledge</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => props.onClick()} name='/projects' href="#projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => props.onClick()} name='/experience' href='#experience'>Experience</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => props.onClick()} name='/contact' href='#contact'>Contact</NavLink>
        </NavItem>
      </Nav>
      </div>
    </Fragment>
  )
}

export default withRouter(SideDrawer)