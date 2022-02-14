import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'reactstrap'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      salary: 70000,
      name: 'king',
      amount: 9000,
      prop1: this.props.city
    }

     // props.name = "king";  // In Reactjs Props are read-only we cant update them

    //  this.state.name = "pranav";
    //  this.state.amount = 18000;
    
  }

  render () {

    /* const myStyle = {
      color: '#000000',
      ':hover': {
        color: '#ff00ff'
      }
    };*/

    return (
      <React.StrictMode>

        <h1 class='cls1'> Welcome {this.props.name} </h1>

        <h2 className='mystyle'>
          State values: {this.state.name} , {this.state.amount}
        </h2>

        <h3> City Value from Props to State: {this.state.prop1} </h3>

        <h4 style={{ color: 'red' }}> Salary : {this.state.salary} </h4>

        <div>
          <button class='btn btn-primary'> Click </button>
        </div>

        <Button color='danger'> Reset </Button>
        
      </React.StrictMode>
    )
  }

  // state = {
  //   name: 'king',
  //   amount: 9000,
  //   prop1: this.props.city
  // }
}

export default App
