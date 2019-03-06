import React, { Component } from 'react';
import List from "./List"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    task: "",
    due: "",
    todos: []
  }
  changeTask = (task) => {
    //need to update task in state
  }
  changeDue = (due) => {
    //need to update due in state!
  }
  submit = () => {
    //need to push to todos!
  }
  render() {
    return (
      <div className="App">
        <input onChange={e => this.changeTask(e.target.value)} />
        <input onChange={e => this.changeDue(e.target.value)} />
        <button onClick={this.submit}>Add Todo</button>
        <List />
      </div>
    );
  }
}

export default App;
