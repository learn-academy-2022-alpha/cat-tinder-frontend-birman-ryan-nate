import React, { Component } from 'react'
import "./NotFound.css"
export class NotFound extends Component {
  render() {
    return (
      <div className='notfound'>
        <h1>Nothing is here</h1>
        <img src="https://www.itl.cat/pngfile/big/99-992256_3d-notebook-or-laptop-with-page-not-found.png" width="100%" height="100%"></img>
      </div>
    )
  }
}

export default NotFound