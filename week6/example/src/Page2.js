





import React, { Component } from 'react';

import './App.css';
import { Link } from 'react-router-dom'

import { DatePicker } from 'antd';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class Page2 extends Component {

    onChange = (date, dateString) => {
        console.log(date, dateString);
    }
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
                Page 2
                <div>
                    <DatePicker onChange={this.onChange} />
                    <br />
                    <MonthPicker onChange={this.onChange} placeholder="Select month" />
                    <br />
                    <RangePicker onChange={this.onChange} />
                    <br />
                    <WeekPicker onChange={this.onChange} placeholder="Select week" />
                </div>
            </div>
        );
    }
}

export default Page2;
