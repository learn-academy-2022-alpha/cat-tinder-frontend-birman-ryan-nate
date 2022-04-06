import React, { Component } from 'react'

export class AnimalShow extends Component {
  render() {
    let { animal } = this.props
    return (
      <>
        <h2>AnimalShow</h2>
        <p>{animal.name}</p>
        <p>{animal.age}</p>
        <p>{animal.enjoys}</p>
        <img src={animal.image}/>
      </>
    )
  }
}

export default AnimalShow