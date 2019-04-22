import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import './App.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                Home
            </div>
        );
    }
}

export default Home;


