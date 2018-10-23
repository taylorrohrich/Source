import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Input extends Component {
  state = {
    date: "",
    task: ""
  };
  render() {
    return (
      <div style={{ display: "flex" }}>
        <input
          value={this.state.task}
          type="text"
          placeholder="Enter a task"
          onChange={e => {
            this.setState({ task: e.target.value });
          }}
        />
        <input
          value={this.state.date}
          type="text"
          placeholder="Enter a completion date"
          onChange={e => {
            this.setState({ date: e.target.value });
          }}
        />
        <button
          onClick={() => this.props.addToList(this.state.date, this.state.task)}
        >
          submit
        </button>
      </div>
    );
  }
}

export default Input;
