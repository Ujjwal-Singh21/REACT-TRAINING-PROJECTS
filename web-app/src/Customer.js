import React from 'react'

function Customer () {

  function handleButton () {
    console.log('Button Click Handled')
  }
  
  return (
    <div>
      <h1> This is Customer Component </h1>
      <button onClick={handleButton}> Customer Click </button>
    </div>
  )
}

export default Customer
