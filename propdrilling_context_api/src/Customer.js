import React, { Component } from 'react'
import Bank from './Bank'

class Customer extends Component {
  render () {
    return (
      <div>
        <h1>Customer Component Paying to Bank</h1>
        <Bank amount='5000' />
      </div>
    )
  }
}

export default Customer
