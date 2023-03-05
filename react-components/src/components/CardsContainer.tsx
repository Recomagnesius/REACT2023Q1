import React from 'react';
import BookCard from "./BookCard";
import "./CardContainer.css";

function CardsContainer() {
  return (
    <div className='cards-container'>
      <div className="cards-row">
        <BookCard
          image="data:image/jpeg;base64,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"
          author="Bruce Lee"
          title="Jeet Kune Do"
          rating={3.2} />
        <BookCard
          image="https://m.media-amazon.com/images/I/817HOFZewXL.jpg"
          author="Marcus Aurelius"
          title="Meditations"
          rating={4.2} />
        <BookCard
          image="https://m.media-amazon.com/images/P/B09QXZB6SK.01._SCLZZZZZZZ_SX500_.jpg"
          author="Stephen King"
          title="Fairy Tale"
          rating={4.6} />
        <BookCard
          image="https://m.media-amazon.com/images/I/91W+iFwTKNL.jpg"
          author="John Boyne"
          title="All the Broken Places"
          rating={4.1} />
      </div>
      <div className="cards-row">
      <BookCard
          image="https://m.media-amazon.com/images/P/0593334833.01._SCLZZZZZZZ_SX500_.jpg"
          author="Emily Henry"
          title="Book Lovers"
          rating={3.2} />
        <BookCard
          image="https://m.media-amazon.com/images/I/91gPrjk9OmL.jpg"
          author="Gabrielle Zevin "
          title="Tomorrow, and Tomorrow, and Tomorrow"
          rating={4.8} />
        <BookCard
          image="https://m.media-amazon.com/images/I/71zUWPBrPgL.jpg"
          author="Nita Prose"
          title="The Maid"
          rating={4.6} />
        <BookCard
          image="https://m.media-amazon.com/images/I/81bGKUa1e0L.jpg"
          author="James Clear"
          title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"
          rating={4.4} />
      </div>
    </div>
  )
}

export default CardsContainer
