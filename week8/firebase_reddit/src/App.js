import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    images: [],
    subreddit: "",
  }
  submit = () => {
    fetch(`https://www.reddit.com/r/${this.state.subreddit}/.json`).then(res => res.json()).then(res => {
      const image = res.data.children[1].data.url;
      console.log(image, res.data)
      //need to add firebase here as well
      this.setState({
        images: this.state.images.concat(image),
        subreddit: ""
      })
    }).catch(err => {
      alert("subreddit does not exist")
    })
  }
  componentDidMount() {
    //Add firebase here
  }
  mapImages = () => {
    const images = this.state.images;
    return images.map(url => {
      return <img style={{ flex: 1, height: 200, width: "auto", margin: 25 }} src={url} />
    })
  }
  render() {
    return (
      <div >
        <input value={this.state.subreddit} onChange={e => { this.setState({ subreddit: e.target.value }) }}></input>
        <button onClick={this.submit}>Submit!</button>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          {this.mapImages()}
        </div>
      </div >
    );
  }
}

export default App;
