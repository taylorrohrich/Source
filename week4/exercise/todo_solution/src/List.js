import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class List extends Component {
  mapTodoList = todoList => {
    return todoList.map(item => (
      <li>
        task: {item.task}, due date: {item.date}
      </li>
    ));
  };
  render() {
    return (
      <div>
        <ul>{this.mapTodoList(this.props.todoList)}</ul>
      </div>
    );
  }
}

export default List;
