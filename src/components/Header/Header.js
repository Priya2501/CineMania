import './Header.css'
import React from 'react'

const Header = () => {
  return (
    <span onClick={()=> window.scroll(0,0)} className='header' role="img" aria-label="emoji name">
        🎬Cinemania📽️🍿
      </span>
  )
}

export default Header;