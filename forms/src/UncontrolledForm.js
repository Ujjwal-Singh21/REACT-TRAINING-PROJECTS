import React, { Component } from 'react'

class UncontrolledForm extends Component {

  constructor (props) {
    super(props)
    this.usernameInput = React.createRef()
    this.passwordInput = React.createRef()

    this.state = {
      username: '',
      password: ''
    }
  }

  // executed before render method
  // focuses on UserName text area
  componentDidMount = () => {
    this.usernameInput.current.focus()
  }

  submitHandler = (event) => {
    event.preventDefault() 

    console.log(this.usernameInput.current.value)
    console.log(this.passwordInput.current.value)

    this.setState({ 
        username: this.usernameInput.current.value 
    })
    
    this.setState({
         password: this.passwordInput.current.value 
        })
  }

  render () {

    var {username, password} = this.state

    return (
      <div>

        <form onSubmit={this.submitHandler}>

          UserName: <input type='text' ref={this.usernameInput} /> 
          Password: <input type='Password' ref={this.passwordInput} />
         
          <button type='submit'> Submit </button>

        </form>

        <h2> Your username : {username} </h2>
        <h2> Password : {password} </h2>

      </div>
    )
  }
}

export default UncontrolledForm
