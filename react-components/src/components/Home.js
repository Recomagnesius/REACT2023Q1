import React, { Component } from 'react';
import "./Home.css";
import Header from "./Header";
import CardsContainer from "./CardsContainer";
export class Home extends Component {
    render() {
        return (React.createElement("div", { className: 'Home' },
            React.createElement(Header, null),
            React.createElement(CardsContainer, null)));
    }
}
export default Home;
