import React, { Component } from 'react'


export class AnimalShow extends Component {
  render() {
    let { animal } = this.props
    return (
      <div className="showpage">
        <h1 className="align">Profile</h1>
        <h3 className="align">Name: {animal.name}</h3>
        <h3 className="align">Age: {animal.age}</h3>
        <h3 className="align">I enjoy {animal.enjoys}</h3>
        <img src={animal.image} className="center" alt=''/>
      </div>
    )
  }
}

export default AnimalShow