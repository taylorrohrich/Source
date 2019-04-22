import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import './App.css';

class App extends Component {
  // componentDidMount() {
  //   fetch("https://official-joke-api.appspot.com/jokes/random").then(res => res.json()).then(res => {
  //     console.log(res)
  //   })
  // }
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
      </Router>
    );
  }
}

export default App;


