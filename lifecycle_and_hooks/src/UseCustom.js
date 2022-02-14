import React from 'react'
import useCustomCounter from './Custom'
import useCustomReducer from './Custom2'

function UseCustom () {
    
  //storing custom hook in a variable
  const data = useCustomCounter()
  const data1 = useCustomReducer()

  return (
    <React.Fragment>

      <h1> Count Up: {data.count} </h1>
      <button onClick={data.handleIncrement}> Increment </button>

      <h1>Count Down: {data1.count}</h1>
      <button onClick={data1.handleDecrement}> Decrement </button>

    </React.Fragment>
  )
}

export default UseCustom
