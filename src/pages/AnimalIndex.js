import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Button, CardTitle, Row, Col } from 'reactstrap'

class AnimalIndex extends Component {
  render() {
    return (
      <div>
        <h2 className="index-page">Available to flirt</h2>
        <div className="index-name">
          {this.props.animals && this.props.animals.map(animal => {
            return(
              <Row key={animal.id}>
                <Col sm="6">
                  <Card body>
                    <CardTitle tag="h5">Hi, my name is {animal.name}</CardTitle>
                    <img src={animal.image} width="150" height="150" alt=""/>
                    <NavLink to={`/animalshow/${animal.id}`}><Button>See profile</Button></NavLink>
                    <NavLink to={`/animaledit/${animal.id}`}><Button>Edit profile</Button></NavLink>
                  </Card>
                </Col>
              </Row>
            )
          })}
        </div>
      </div>
    )
  }
}

export default AnimalIndex