import { Component } from "react";

export default class Student extends Component
{
    constructor()
    {
        super();
        this.state = {
            name: 'Niyaz',
            rollno: 101
        }
        this.changeState = this.changeState.bind(this);
    }

    handleEvent = (e) =>
    {
        console.log("Handle Event is called....")
        console.log(e);
        this.setState({name:"Javeed", rollno:909})
    }

    changeState()
    {
        const innerFunc = function(state, props)
        {
            console.log(state.name +" "+state.rollno );
            state.name = "King";
            state.rollno = "808";
        }
        this.setState(innerFunc);
    }
    
    render()
    {
        return (
            <div>
                <h1>Name : {this.state.name}</h1>
                <h1>RollNo : {this.state.rollno}</h1>
                <button onClick={this.handleEvent}>Click</button>
                <button onClick={this.changeState}>Change Values</button>
            </div>
        )
    }
}