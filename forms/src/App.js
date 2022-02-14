import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class App extends Component {
  render () {
    return (
      <div>

        <h2> This is App Component... </h2>
        <h2> Name: {this.props.name} </h2>
        <h2> Amount: {this.props.amount} </h2>
        <h2> Array: {this.props.propArray}</h2>
        <h2> Bool: {this.props.bool ? 'True...' : 'False...'}</h2>
        <h2> Function: {this.props.propFunc(3)}</h2>
        <h2>
          JSon: {this.props.propJson.id}
                {this.props.propJson.productname}
                {this.props.propJson.price}
        </h2>

      </div>
    )
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number,
  propArray: PropTypes.array,
  propBool: PropTypes.bool,
  propFunc: PropTypes.func,
  propJson: PropTypes.object
}

App.defaultProps = {
  name: 'Javeed',
  amount: 50000,
  propArray: [10, 20, 30],
  propBool: false,
  propFunc: function (e) {
    return e
  },

  propJson: {
    id: 101,
    productname: 'mobile',
    price: 12000
  }
}
