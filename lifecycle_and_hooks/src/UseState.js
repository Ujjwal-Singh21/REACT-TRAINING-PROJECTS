import React, { useState, useEffect } from 'react'

function UseState () {

  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(50)

  //increment
  const handleIncrement = () => {
    setCount(count + 1)
  }
  
  //decrement
  const handleDecrement = () => {
    setCount1(count1 - 1)
  }

  //it will execute when component is mount initially, then thereAfter
  //it will execute when component is updated
  useEffect(() => {
    console.log('useEffect ')
  }, [count, count1])

  return (
    <React.Fragment>

      <h1>Count Up: {count}</h1>
      <button onClick={handleIncrement}> Increment </button>

      <h1>Count Down: {count1}</h1>
      <button onClick={handleDecrement}> Decrement </button>

    </React.Fragment>
  )
}

export default UseState
