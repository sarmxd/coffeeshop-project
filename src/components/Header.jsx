import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className="container">
    <nav className="nav-links">
      <button className="nav-link" href="#">Home</button>
      <button className="nav-link" href="#">About</button>
      <button className="nav-link" href="#">Services</button>
      <button className="nav-link" href="#">Contact</button>
    </nav>
    <a className="logo" href="#">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="logo-icon" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="logo-text">dropcoffee.</span>
    </a>
    <div className="button-group">
      <button className="click-me-button">Click Me</button>
      <button className="other-button">Button
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="arrow-icon" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
  )
}

export default Header;
