import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Menu } from 'antd';
import './App.css';

class Navbar extends Component {
    render() {
        return (
            <div>
                <Menu
                    mode="horizontal"
                >
                    <Menu.Item>
                        <Link to="/">
                            Home
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/About">
                            About
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/Contact">
                            Contact
                        </Link>
                    </Menu.Item>

                </Menu>
            </div>
        );
    }
}

export default Navbar;


