





import React, { Component } from 'react';

import './App.css';
import { Link } from 'react-router-dom'

class Page3 extends Component {
    render() {
        return (
            <div className="App">
                <div style={{ padding: 15, display: "flex", backgroundColor: "lightgrey", color: "white", flexDirection: "row" }}>
                    <Link to="/" style={{ flex: 1 }}>
                        Page1
          </Link >
                    <Link to="/page2" style={{ flex: 1 }}>
                        Page2
          </Link>
                    <Link to="/page3" style={{ flex: 1 }}>
                        Page3
          </Link>
                </div>
                Page 3
            </div>
        );
    }
}

export default Page3;
