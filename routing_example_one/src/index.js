import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Contact from './Contact'
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom'

const routing = (
  <Router>
    <div>

      <h1>Welcome to React Routers </h1>

      <ul>
        <li>
          <NavLink to='/home' exact activeStyle={{ color: 'red' }}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to='/contact' exact activeStyle={{ color: 'green' }}>
            Contact Us
          </NavLink>
        </li>
      </ul>

      <Route exact path='/' component={App} />
      <Route path='/home' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/contact' component={Contact} />
      
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
