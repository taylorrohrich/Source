import React, { Component } from 'react';

import Posts from "./Posts"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';


class App extends Component {
  render() {
    return (<div>
      <Router>
        <Route exact path="/" component={() => <Posts subreddit="rarepuppers" />} />
        <Route exact path="/startledcats" component={() => <Posts subreddit="startledcats" />} />
      </Router>
    </div>)
  }
}

export default App;
