import React, { Component } from 'react';
import InputForm from './inputform.js'


class AddSighting extends Component {

  constructor(props) {
    super(props);
    this.state = {formVisibility: false};
    this.form = ""
  }

  addNew = (event) => {
  console.log(this.state.formVisibility)
  if (this.state.formVisibility === false) {
    this.setState({formVisibility: true});
  } else {
    this.setState({formVisibility: false});
  }
  this.formVisibility = true;
  if (this.state.formVisibility === true) {
    this.form = <InputForm />
    } else {
    this.form = ""
    }
  }

  showForm = () => {
    return (<div> form </div>)
  }

  render() {
    return (
      <div>
      <InputForm />

      </div>
    )
  }
}

export default AddSighting;
