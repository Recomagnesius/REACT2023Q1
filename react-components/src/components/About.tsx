import React, { Component } from 'react';
import Header from './Header';
import './About.css';

export class About extends Component {
  render() {
    return (
      <div className="About">
        <Header searchVis={false} />
      </div>
    );
  }
}

export default About;
