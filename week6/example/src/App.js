import React, { Component } from 'react';




import Page1 from "./Page1"
import Page2 from "./Page2"
import Page3 from "./Page3"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';


class App extends Component {
  render() {
    return (<div>
      <Router>
        <Route exact path="/" component={Page1} />
        <Route exact path="/page2" component={Page2} />
        <Route exact path="/page3" component={Page3} />
      </Router>
    </div>)
  }
}

export default App;
