import React from 'react'
import BookCard from "./BookCard";

function CardsContainer() {
  return (
    <div className='cards-container'>
      <div className="cards-row">
        {/* <BookCard image={""} author={"Bruce Lee"} title={"art"} rating={4.7} /> */}
        {/* <BookCard />
        <BookCard /> */}
      </div>
      <div className="cards-row">
      {/* <BookCard />
        <BookCard />
        <BookCard /> */}
      </div>
    </div>
  )
}

export default CardsContainer
