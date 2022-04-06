import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div>
        <Link to={"./AnimalIndex"}>
          <h1 className="align">Click here to flirt now</h1>
        </Link>
        <img src={"https://cdn.livekindly.co/wp-content/uploads/2019/02/livekindly_tinder.jpg"}
          width="500" height="450" className="center"  
        ></img>
      </div>
    );
  }
}

export default Home