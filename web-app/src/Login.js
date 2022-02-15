import { Component } from 'react'

class Login extends Component {
  state = {
    uid: 101,
    username: 'Imran',
    password: 'tiger'
  }

  handleClick = (id) => {
    console.log(id)
  }

  passArgument = () => {
    return this.handleClick(this.state.uid)
  }

  render () {
    return <button onClick={this.passArgument}> Pass Id </button>
  }
}

export default Login
