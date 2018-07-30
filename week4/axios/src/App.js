import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

const mapResults = result => {
  return result.map(row => <div>post title: {row.data.title}</div>);
};
class App extends Component {
  state = {
    result: null
  };
  componentDidMount() {
    axios.get("https://www.reddit.com/r/rarepuppers.json").then(response => {
      console.log(response);
      const data = response.data.data.children;
      this.setState({ result: data });
    });
  }
  render() {
    return (
      <div className="App">
        {console.log(this.state.result)}
        {this.state.result && mapResults(this.state.result)}
      </div>
    );
  }
}

export default App;
