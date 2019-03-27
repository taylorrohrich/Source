





import React, { Component } from 'react';

import './App.css';
import { Link } from 'react-router-dom'
import { Button } from 'antd';

class Posts extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        fetch(`https://www.reddit.com/r/${this.props.subreddit}/.json`).then(res => res.json()).then(res => {
            console.log(res.data.children)
        })
    }
    render() {
        return (
            <div className="App">
                {this.props.subreddit}
            </div>
        );
    }
}

export default Posts;
