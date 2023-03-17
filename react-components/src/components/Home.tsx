import React, { Component } from 'react'
import "./Home.css";
import Header from "./Header"
import CardsContainer from "./CardsContainer";

export class Home extends Component {
  render() {
    return (
      <div className='Home'>
      <Header />
      <CardsContainer />
    </div>
    )
  }
}

export default Home