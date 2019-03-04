import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Body extends Component {

    render() {

        return (
            <div className="App">
                {this.props.counter}
            </div>
        );
    }
}

export default Body;
