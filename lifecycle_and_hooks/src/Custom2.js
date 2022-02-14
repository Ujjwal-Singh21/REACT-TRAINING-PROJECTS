import { useState } from 'react'

function useCustomReducer () {

  const [count, setCount] = useState(50)

  const handleDecrement = () => {
    setCount(count - 1)
  }
  
  return {
    count,
    handleDecrement
  }
}

export default useCustomReducer
