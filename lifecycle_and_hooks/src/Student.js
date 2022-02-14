import React, { Component } from 'react'
import Marks from './Marks'

class Student extends Component {
  constructor (props) {
    super(props)

    this.state = {
      roll: 101
    }
  }

  //arrow function
  clickHandle = () => {
    this.setState({
      roll: 102
    })
  }

  render () {
    return (
      <div>
        <Marks roll={this.state.roll} />
        <button onClick={this.clickHandle}> ClickMe </button>
      </div>
    )
  }
}

export default Student
