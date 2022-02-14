import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div>

        <h1> Welcome to App Component </h1>
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt='logo' />

        <ul>
          <li>
            <Link to='/home'> Home </Link>
          </li>

          <li>
            <Link to='/login'> Login </Link>
          </li>

          <li>
            <Link to='/register'> User Register </Link>
          </li>

          <li>
            <Link to='/contact'> Contact </Link>
          </li>
        </ul>
        
      </div>
    )
  }
}

export default App
