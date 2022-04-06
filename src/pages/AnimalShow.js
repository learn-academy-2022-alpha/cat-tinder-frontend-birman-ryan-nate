import React, { Component } from 'react'

export class AnimalShow extends Component {
  render() {
    let { animal } = this.props
    return (
      <>
        <h2 className="align">Profile</h2>
        <p className="align">{animal.name}</p>
        <p className="align">{animal.age}</p>
        <p className="align">{animal.enjoys}</p>
        <img src={animal.image} className="center" />
      </>
    );
  }
}

export default AnimalShow