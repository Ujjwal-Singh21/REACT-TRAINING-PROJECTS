import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Customer from './Customer'
import Factory from './Factory'
import Dealer from './Dealer'

ReactDOM.render(
  <React.StrictMode>

    {/* <Factory /> */}
    <Customer/>

  </React.StrictMode>,
  document.getElementById('root')
)
