import React, { Component } from 'react'
import { MyContext } from './Factory'

class Dealer extends Component {
  render () {
    return (
      <div>

        <h1>Welcome to Dealer</h1>

        <MyContext.Consumer>
          {
             (data) => <h2> No. of Bikes Ready in Factory : {data} </h2>
          }
        </MyContext.Consumer>

      </div>
    )
  }
}

export default Dealer
