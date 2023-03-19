import React, { Component } from 'react';
import './Header.css';
import SearchBar from './SearchBar';
export class Header extends Component {
    render() {
        return (React.createElement("div", { className: "Header" },
            React.createElement(SearchBar, null)));
    }
}
export default Header;
