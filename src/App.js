import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AnimalIndex from './pages/AnimalIndex'
import AnimalShow from './pages/AnimalShow'
import AnimalEdit from './pages/AnimalEdit'
import AnimalNew from './pages/AnimalNew'
import NotFound from './pages/NotFound'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      animals: []
    }
  }
  componentDidMount(){
    this.readAnimal()
  }

  createAnimal = (newAnimal) => {
    fetch("http://localhost:3000/animals", {
      body: JSON.stringify(newAnimal),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(payload => this.readAnimal())
    .catch(errors => console.log("Animal create errors:", errors))
  }
  
  readAnimal = () => {
    fetch("http://localhost:3000/animals")
    .then(response => response.json())
    .then(payload => this.setState({animals: payload}))
    .catch(errors => console.log("Animal read errors:", errors))
  }
  updateAnimal = (animal, id) => {
    fetch(`http://localhost:3000/animals/${id}`, {
      body: JSON.stringify(animal),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json())
    .then(payload => this.readAnimal())
    .catch(errors => console.log("Animal update errors:", errors))
  }

  deleteAnimal = () => {
    
  }
  render() {
    return ( 
      <div className="background">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/AnimalIndex"
            render={(props) => <AnimalIndex animals={this.state.animals} />}
          />
          <Route
            path="/AnimalShow/:id"
            render={(props) => {
              let id = props.match.params.id
              let animal = this.state.animals.find(
              animal => animal.id === +id)
              return <AnimalShow animal={animal} />
            }}
          />
          <Route
            path="/AnimalNew"
            render={(props) => <AnimalNew createAnimal={this.createAnimal} />}
          />
          <Route path="/AnimalEdit/:id" render={(props) => {
            let id = props.match.params.id
            let animal = this.state.animals.find(animal => animal.id === +id)
            return <AnimalEdit updateAnimal={this.updateAnimal} animal={animal} />
          }} /> 
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Footer />
    </div>
    )
  }
}


export default App;
