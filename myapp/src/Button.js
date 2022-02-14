import React from 'react'

class Button extends React.Component {
  constructor (props) {
    super(props)
    console.log(this.props.name)
    console.log(this.props.children);
  }

  render () {
    return <button type='button'> {this.props.name} </button>
  }
}

export default Button
