import React, { Component } from 'react'

class Product extends Component {
  render () {
    return (
      <div>
        Product Info: {this.props.pid} {this.props.pname} {this.props.price}
      </div>
    )
  }
}

export default Product
