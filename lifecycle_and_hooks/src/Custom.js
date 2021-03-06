import { useState } from 'react'

//creating custom hook
function useCustomCounter () {

  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }
  
  return {
    count,
    handleIncrement
  }
}

export default useCustomCounter
