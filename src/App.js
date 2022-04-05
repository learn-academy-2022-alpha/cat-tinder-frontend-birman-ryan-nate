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
import mockAnimals from './mockAnimals'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      animals: mockAnimals
    }
  }
  render() {
    return ( 
      <div className='background'>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/AnimalIndex" component={AnimalIndex} />
            <Route path="/AnimalShow" component={AnimalShow} />
            <Route path="/AnimalNew" component={AnimalNew} />
            <Route path="/AnimalEdit" component={AnimalEdit} />
            <Route component={NotFound}/>
          </Switch>
        </Router>
      <Footer />
      </div>
    )
  }
}


export default App;
