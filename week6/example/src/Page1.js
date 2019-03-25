





import React, { Component } from 'react';

import './App.css';
import { Link } from 'react-router-dom'
import { Button } from 'antd';

class Page1 extends Component {
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
                <div>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                </div>
            </div>
        );
    }
}

export default Page1;
