import React from 'react'
import PropTypes from 'prop-types'

export default class Student extends React.Component {
  render () {
    return (
      <div>

        <h1>
          Hello Friends , I am {this.props.name} and my rollno is  {this.props.roll}
         
        </h1>

        <h1> Is Student Active ? {this.props.isActive}</h1>

        <h2> {this.props.children} </h2>

      </div>
    )
  }
}

Student.propTypes = {
  name: PropTypes.string.isRequired, // mandatory to filled
  roll: PropTypes.number,
  isActive: PropTypes.bool,
  list: PropTypes.array
}

Student.defaultProps = {
  name: 'Capgemini'
}
