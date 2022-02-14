import React, { Component } from 'react'

class Shop extends Component {
  render () {
    return (
      <div>
        <h3> Welcome To Shop </h3>
        <h3> Payment Received Total Amount : {this.props.amount} </h3>
      </div>
    )
  }
}

export default Shop
