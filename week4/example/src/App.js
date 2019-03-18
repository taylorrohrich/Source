import React, { Component } from 'react';
import logo from './logo.svg';
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import './App.css';

class App extends Component {
  state = {
    counter: 0,
    text: "",
    data: null,
    list: ["list item 1", "2", "3", "4"]
  }
  updateText = (e) => {
    this.setState({
      text: e
    })
  }
  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random").then(response => response.json())
      .then(
        res => {
          console.log(res)
          this.setState({
            image: res.message
          })
        }
      );

  }
  mapListItems = () => {
    const list = this.state.list;
    let listToHtml = list.map((item) => {
      return <div>{item}</div>
    })
    return listToHtml;
  }
  render() {

    return (
      <div className="App">
        {this.mapListItems()}
        <input onChange={(e) => this.updateText(e.target.value)} value={this.state.text}></input>
        <button onClick={() =>
          this.setState({ counter: this.state.counter + 1 })}>
          click me!
          </button>
        <Header />
        <Body counter={this.state.counter} />
        <Footer />
        <img src={this.state.image} />
      </div>
    );
  }
}

export default App;
