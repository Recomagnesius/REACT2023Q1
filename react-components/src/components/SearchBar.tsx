import React from 'react'
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className='search-bar'>
  
      <input type="text" className='search-bar__input' placeholder='Type your request here' />
      <button type='submit' className='search-bar__btn'>
        <i className="gg-search "></i>
      </button>
    </div>

  )
}

export default SearchBar
