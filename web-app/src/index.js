import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Customer from './Customer';
import Student from './Student';
import Login from './Login';

ReactDOM.render(
  <React.StrictMode>
    <App city="Chennai"/>
    {/* <Customer /> */}
    {/* <Student /> */}
    {/* <Login /> */}
  </React.StrictMode>,
  document.getElementById('root')
);


