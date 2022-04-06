import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class AnimalIndex extends Component {
  render() {
    return (
      <>
        <h2>Available to flirt</h2>
        {this.props.animals && this.props.animals.map(animal => {
          return(
            <NavLink to={`/AnimalShow/${animal.id}`} key={animal.id}>
              {animal.name}
            </NavLink>
          )
        })}
      </>
    )
  }
}

export default AnimalIndex