import React, { Component } from 'react'

class App extends Component {

  render () {
    const array = [10, 20, 30, 40]
    
    const newArray = array.map((num) => {
      return <li key={num}> {num * 2} </li>
    })

    return (
      <div>
        <ul> {newArray} </ul>
      </div>
    )
  }
}

export default App
