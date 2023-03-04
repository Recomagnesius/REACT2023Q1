import React from 'react'
import "./Home.css";
import Header from "./Header"
import CardsContainer from "./CardsContainer";

function Home() {
  return (
    <div className='Home'>
      <Header />
      <CardsContainer />
    </div>
  )
}

export default Home
