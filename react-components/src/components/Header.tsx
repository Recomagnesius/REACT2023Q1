import React, { Component } from 'react';
import './Header.css';
import SearchBar from './SearchBar';

export class Header extends Component {
  render() {
    return (
      <div className="Header">
        <SearchBar />
      </div>
    );
  }
}

export default Header;
