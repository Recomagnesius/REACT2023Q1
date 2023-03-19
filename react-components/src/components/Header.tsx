import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchBar from './SearchBar';

export class Header extends Component<{ searchVis: boolean }, object> {
  render() {
    return (
      <div className="Header">
        <nav className="nav-bar">
          <h2 className="currentPage header-link">{this.props.searchVis ? 'Header' : 'About'}</h2>
          <Link to={this.props.searchVis ? '/about' : '/'}>
            <h2 className="toOtherPage header-link">{this.props.searchVis ? 'About' : 'Header'}</h2>
          </Link>
        </nav>

        <SearchBar visible={this.props.searchVis} />
      </div>
    );
  }
}

export default Header;
