import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
class App extends Component {
  state = {
    counter: 0,
    nonsense: "blah"
  };
  /*
*/
  incrementCounter = counter => {
    let newCounter = (counter += 1);
    this.setState({
      counter: newCounter
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.counter}
        <div>
          <button onClick={() => this.incrementCounter(this.state.counter)}>
            click me!
          </button>
        </div>
      </div>
    );
  }
}

export default App;
