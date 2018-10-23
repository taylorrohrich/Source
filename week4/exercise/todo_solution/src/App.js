import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./List";
import Input from "./Input";
class App extends Component {
  state = {
    todoList: []
  };
  addToList = (date, task) => {
    this.setState({
      todoList: this.state.todoList.concat({ date, task })
    });
  };
  render() {
    return (
      <div>
        <Input addToList={this.addToList} />
        <List todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;
