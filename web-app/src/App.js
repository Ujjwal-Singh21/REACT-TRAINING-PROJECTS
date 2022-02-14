import React from "react";

export default class App extends React.Component
{
  constructor(props)
  {
    super(props);
    //this.handle = this.handleClick.bind(this);
    this.state = {
      name: 'Pranav',
      salary: 40000,
      city: this.props.city
    }
  }
  
  handleClick(e) // regular JS function
  {
    e.preventDefault();
    console.log("Button is Clicked");
    //this.setState({salary:50000});
  }
  
  get = () => console.log("Arrow Function is called...."); //Arrow Function

  render()
    {
      return (<div>
                  <h1>Welcome {this.state.name}, your salary is {this.state.salary} and from {this.props.city}!</h1>
                  <h2>From State Attribute {this.state.city}</h2>
                  <button onClick={this.handleClick}>Click</button>
                  <button onClick={this.get}>Button2</button>
                  <a href="http://www.youtube.com" onClick={this.handleClick}>Click Here</a>
             </div>);
    }
}