import React from 'react'

function BookCard(image:string, author:string, title:string, rating: number) {
  return (
    <div className='book-card'>
      <button className="btn-add"></button>
    </div>
  )
}

export default BookCard
