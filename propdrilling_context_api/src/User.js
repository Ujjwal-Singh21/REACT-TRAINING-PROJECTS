import React, { Component } from 'react'
import { MyContext } from './Factory'

class User extends Component {
  render () {
    return (
      <div>

        <h1> User Component </h1>

        <MyContext.Consumer>
          {
              (data) => <h2> Received Bike by User is : {data} </h2>
          }
        </MyContext.Consumer>

      </div>
    )
  }
}

export default User
