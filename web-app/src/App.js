import React, { Component } from 'react'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      name: 'Pranav',
      salary: 40000,
      city: this.props.city
    }
    this.handleClick = this.handleClick.bind(this)
  }

  // regular JS function
  handleClick (e) {
    e.preventDefault()
    console.log('Button is Clicked')
    this.setState({
      salary: 50000
    })
  }

  //Arrow Function
  get = () => {
    console.log('Arrow Function is called....')
  }

  render () {
    return (
      <div>
        <h1>
          Welcome {this.state.name}, your salary is {this.state.salary} and from
          {this.props.city}!
        </h1>

        <h2> From State Attribute {this.state.city} </h2>

        <button onClick={this.handleClick}> Click </button>
        <button onClick={this.get}> Button2 </button>

        <a href='http://www.youtube.com' onClick={this.handleClick}>
          Click Here
        </a>
        
      </div>
    )
  }
}

export default App
