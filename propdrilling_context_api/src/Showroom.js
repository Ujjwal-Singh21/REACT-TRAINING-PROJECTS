import React, { Component } from 'react'
import User from './User'

class Showroom extends Component {
  render () {
    return (
      <div>
        <h2> Showroom not using any data from provider </h2>

        <User />
      </div>
    )
  }
}

export default Showroom
