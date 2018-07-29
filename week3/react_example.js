import React from "react"


export default class Example extends React.Component{
    constructor(props){
        super(props);
        this.state={
            counter=0
        }
    }

    incrementCounter= ()=>{
        this.setState({
            counter: this.state.counter+=1 //why need to say this.state.counter?
        })
    }
    render(){
        <div> 
<div>
    {counter}
    </div>
    {/*why arrow instead of just this.incrementCounter() */}
    <button onClick={()=>this.incrementCounter()}> click me </button>
            </div>
    }
}