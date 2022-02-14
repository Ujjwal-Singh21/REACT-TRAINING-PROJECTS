import React, { Component } from 'react'

export default class App extends Component {
  state={
    users:[
      {id:101,name:"raja",password:"rani"},
      {id:102,name:"king",password:"kingdom"},
      {id:103,name:"raj",password:"simran"}

    ]
  }
  render() {
    const newUsers=this.state.users.map(user=>
      {
        console.log(user);
      return <h1 key = {user.id}>Id:{user.id} Name:{user.name} Password: {user.password}</h1>
      })
    return <div>{newUsers}</div>
  }
}
