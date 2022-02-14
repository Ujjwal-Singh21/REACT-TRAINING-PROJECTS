import React, { Component } from 'react'

class App extends Component {
  //constructor
  constructor (props) {
    super(props)

    console.log('App - constructor called')
    //for removing warning message
    this.state = {}
  }

  static getDerivedStateFromProps (props, state) {
    console.log('App - get Derived State From props ')
    //removing warning message
    return null
  }

  componentDidMount () {
    console.log('App - component Did Mount')
  }

  render () {
    console.log('App- rendered')
    return <h1> Hello World </h1>
  }
}

export default App
