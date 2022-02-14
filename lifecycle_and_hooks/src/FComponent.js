import React, { useState } from 'react'

function FComponent () {

  //declaring array variable
  const nameStateVariable = useState('Alan')
  const  name = nameStateVariable[0];
  const  setName =   nameStateVariable[1];

// normal useState declaration
//   const [name, setName] = useState('Alan')

  const handleClick = () => {

    nameStateVariable[1]("Capgemini");

   //  setName('Google Store')
  }

  return (
    <React.Fragment>

      <h1>{name}</h1>
      <button onClick={handleClick}> clickme </button>

    </React.Fragment>
  )
}

export default FComponent
