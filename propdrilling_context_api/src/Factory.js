import React, { Component } from 'react'
import Showroom from './Showroom'
import Dealer from './Dealer'

export const MyContext = React.createContext()

class Factory extends Component {
  state = {
    bike: 'BMW 500',
    bikeCount: 100
  }

  render () {
    return (
      <div>
        <h1> Factory Component with Provider </h1>

        <MyContext.Provider value={this.state.bike}>
          <Showroom />
        </MyContext.Provider>

        <MyContext.Provider value={this.state.bikeCount}>
          <Dealer />
        </MyContext.Provider>
      </div>
    )
  }
}

export default Factory
