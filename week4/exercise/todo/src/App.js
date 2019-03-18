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
  changeTask = (task1) => {
    //need to update task in state
    this.setState(
      {
        task: task1
      }

    )
  }
  changeDue = (due) => {
    this.setState(
      {
        due: due
      }

    )
    //need to update due in state!
  }
  submit = () => {
    let task = this.state.task;
    let due = this.state.due;
    this.setState({
      todos: this.state.todos.concat({
        due: this.state.due,
        task: this.state.task,
      }),
      task: "",
      due: ""
    })
    //need to push to todos!
  }
  render() {
    return (
      <div className="App">
        <input value={this.state.task} onChange={e => this.changeTask(e.target.value)} />
        <input value={this.state.due} onChange={e => this.changeDue(e.target.value)} />
        <button onClick={this.submit}>Add Todo</button>
        <List todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
