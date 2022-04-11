import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <>
        <h1 className="header">Down to Flirt</h1>
        <div className="nav-links">
          <ul>
            <NavLink to="/" className="homeicon">🏠</NavLink> 
          </ul>
            <NavLink to="/AnimalIndex">Meet the animals</NavLink>
          <ul>
            <NavLink to="/AnimalNew">Create your profile</NavLink>
          </ul>
        </div>
      </>
    )
  }
}

export default Header