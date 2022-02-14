import React, { Component } from 'react'

class ComponentForm extends Component {
  state = {
    name: '',
    password: '',
    gender: '',
    data: ''
  }

  handleUserName = e => {
    this.setState({
      name: e.target.value.toUpperCase().substr(0, 7)
    }) //substr must start with 0 only
  }

  handlePassword = e => {
    this.setState({
      password: e.target.value
    })
  }

  setGender = e => {
    this.setState({
      gender: e.target.value
    })
  }

  // .toUpperCase(), .substr() does not work for textarea
  handleTextArea = e => {
    this.setState({
      data: e.target.value
    })
  }

  render () {
    return (
      <div>

        <h1> Form Controlled by React Component </h1>

        <form>
          {/* UserName: <input type="text" onChange={this.handle} defaultValue="Angel" /> */}
          <label> UserName : </label>
          <input
            type='text'
            onChange={this.handleUserName}
            value={this.state.name}
          /> <br />

          <label> Password : </label>
          <input
            type='password'
            onChange={this.handlePassword}
            value={this.state.password}
          /> <br />
         
         <label> Gender : </label>
          <div onChange={this.setGender}>
            <input type='radio' value='MALE' name='gender' /> Male
            <input type='radio' value='FEMALE' name='gender' /> Female
          </div> <br />

          Remarks: <br />
          <textarea
           onChange={this.handleTextArea}
           value={this.state.data}
           placeholder='Enter feedback' />
         
        </form>

        <br />

        <div>
            <h2> FORM DATA </h2>
          UserName: {this.state.name} <br />
          Password: {this.state.password} <br />
          Gender Selected: {this.state.gender} <br />
          Remarks: {this.state.data}
        </div>

      </div>
    )
  }
}

export default ComponentForm
