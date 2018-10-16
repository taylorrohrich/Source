import React, { Component } from "react";
import "./App.css";

class Buttons extends Component {
  render() {
    const index = this.props.index;
    const previous = this.props.previous;
    const next = this.props.next;
    return (
      <div className="App">
        <div>
          <button
            onClick={() => {
              previous();
            }}
          >
            previous
          </button>
          <button
            onClick={() => {
              next();
            }}
          >
            next
          </button>
        </div>
      </div>
    );
  }
}

export default Buttons;
