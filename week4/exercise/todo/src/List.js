import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class List extends Component {
    mapTodos = (todos) => {
        return todos.map(obj => {
            return <div> due at: {obj.due} task: {obj.task}</div>
        })
        //Map through the todos here
    }
    render() {
        const { todos } = this.props
        return (
            <div className="App">
                {this.mapTodos(todos)}
            </div>
        );
    }
}

export default List;
