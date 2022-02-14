import React, { Component } from 'react'
import Shop from './Shop'

class Bank extends Component {
  render () {
    return (
      <div>
        <h2> Bank Component Paying to Shop </h2>
        <Shop amount={this.props.amount} />
      </div>
    )
  }
}

export default Bank
