import React, { Component } from "react";
import Buttons from "./Buttons";
import "./App.css";

class App extends Component {
  state = {
    userInput: "",
    index: 0,
    quotes: [
      "If you ain't first, you're last",
      "Hello there, General Kenobi",
      "Try spinning, that's a good trick!"
    ]
  };
  next = () => {
    this.setState({
      index: (this.state.index + 1) % this.state.quotes.length
    });
  };
  previous = () => {
    if (this.state.index === 0) {
      this.setState({
        index: this.state.quotes.length - 1
      });
    } else {
      this.setState({
        index: this.state.index - 1
      });
    }
  };
  updateUserQuote = quote => {
    this.setState({
      userInput: quote
    });
  };
  addQuote = () => {
    this.setState({
      quotes: this.state.quotes.concat(this.state.userInput)
    });
  };
  render() {
    return (
      <div className="App">
        <div>
          <div>{this.state.quotes[this.state.index]}</div>
        </div>
        <Buttons
          index={this.state.index}
          previous={() => this.previous()}
          next={() => this.next()}
        />
        <input
          value={this.state.userInput}
          onChange={e => {
            this.updateUserQuote(e.target.value);
          }}
        />
        <button
          onClick={() => {
            this.addQuote();
          }}
        >
          Add Quote
        </button>
      </div>
    );
  }
}

export default App;
