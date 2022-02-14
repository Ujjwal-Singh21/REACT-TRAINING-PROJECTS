import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Student from './Student'
import Product from './Product'
//import Button from './Button';

var productObj = {
  pid: 101,
  pname: 'Laptop',
  price: 5000
}

ReactDOM.render(
  <div>

    {/* <App appName='MyApp' /> */}

    {/* <Product
      pid={productObj.pid}
      pname={productObj.pname}
      price={productObj.price}
    /> */}

    <Student name='Ujjwal' roll={9000}>
      This is Student1
    </Student>
    <Student isActive={true} />
    
  </div>,
  document.getElementById('root')
)

//ReactDOM.render(<Student sname = "Ujjwal"/> , document.getElementById('root'));
