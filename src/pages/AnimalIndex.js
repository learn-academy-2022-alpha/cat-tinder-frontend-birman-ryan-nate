import React, { Component } from 'react'

export class AnimalIndex extends Component {
  render() {
    return (
      <div>AnimalIndex
        <p>{this.props.animals}</p>
      </div>
    )
  }
}

export default AnimalIndex