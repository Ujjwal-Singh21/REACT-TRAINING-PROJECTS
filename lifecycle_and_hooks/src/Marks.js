import React, { Component } from 'react'

 class Marks extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mroll: this.props.roll
    }
  }

  // this method we will use when state depends on props
  // to update the value of a state
  static getDerivedStateFromProps (props, state) {
    console.log('Marks - get dereived state from props ')
    console.log(props, state)
    if (props.roll !== state.mroll) {
      return {
           mroll: props.roll 
        }
    }

    return null
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (this.state.mroll < 105) {
      console.log('Mark - Should component update')
      console.log(nextProps, nextState)
      return true
    }
    console.log(nextProps, nextState)
    return false
  }

  //this method runs before update
  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('Marks - get snap shot before update ')
    console.log(prevProps, prevState)
    return 100
  }

  //this method runs after update
  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log('Marks - component did update ')
    console.log(prevProps, prevState, snapshot)
  }
  
  render () {
    console.log('Marks - rendered')
    return (
      <div>
        <h1>{this.state.mroll}</h1>
      </div>
    )
  }
}

export default Marks
