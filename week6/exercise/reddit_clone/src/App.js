import React, { Component } from 'react';

import './App.css';
import { Card } from 'antd';

const { Meta } = Card;


class App extends Component {

  state = {
    posts: []
  }
  componentDidMount() {
    fetch(`https://www.reddit.com/r/rarepuppers/.json`).then(res => res.json()).then(res => {
      this.setState({
        posts: res.data.children
      })
    })
  }
  mapPosts = () => {
    let posts = this.state.posts;
    return posts.map((post) => {
      console.log(post)
      return (
        <Card
          hoverable
          style={{ width: 240, margin: 50 }}
          cover={<img alt="example" src={post.data.url} />}
        >
          <Meta
            title={post.data.title}
            description="www.instagram.com"
          />
        </Card>
      )
    })
  }
  render() {
    return (<div style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
      {this.mapPosts()}
    </div>)
  }
}

export default App;
