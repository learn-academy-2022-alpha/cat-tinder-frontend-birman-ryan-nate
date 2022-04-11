import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Redirect } from "react-router-dom";

class AnimalEdit extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: "",
        age: "",
        enjoys: "",
        image: ""
      },
      submitted: false
    }
  }
  componentDidMount() {
    const { id, ...rest } = this.props.animal
    this.setState({ form: rest})
    }
    handleChange = (e) => {
      let { form } = this.state;
      form[e.target.name] = e.target.value;
      this.setState({ form: form })
    }
    
    handleSubmit = () => {
      this.props.updateAnimal(this.state.form, this.props.animal.id);
      this.setState({ submitted: true })
    }
  render() {
    return (
      <div className="editpage">
      <Form className="editform">
        <h2>Edit your profile</h2>
        <FormGroup>
          <Label for="name">Animal's name</Label>
          <Input
            name="name"
            placeholder="Whats your animal's name"
            type="text"
            onChange={this.handleChange}
            value={this.state.form.name}/>
        </FormGroup>
        <FormGroup>
          <Label for="age">Animal's age</Label>
          <Input
            name="age"
            placeholder="Whats your animal's age"
            type="text"
            onChange={this.handleChange}
            value={this.state.form.age}/>
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">Animal's hobbies</Label>
          <Input
            name="enjoys"
            placeholder="What does animal's enjoy"
            type="text"
            onChange={this.handleChange}
            value={this.state.form.enjoys}/>
        </FormGroup>
        <FormGroup>
          <Label for="image">Animal's image</Label>
          <Input
            name="image"
            placeholder="Add a picture of your animal"
            type="url"
            onChange={this.handleChange}
            value={this.state.form.image}
          />
        </FormGroup>
        <Button onClick={this.handleSubmit} name="submit">
          Submit
        </Button>
        {this.state.submitted && <Redirect to="/animalindex" />}
      </Form>
      </div>
    )
  }
}

export default AnimalEdit