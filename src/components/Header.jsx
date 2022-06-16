import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
      <header className="header-header pi-2r">
          <div className="balance">
              <h1 className='title'>
                  My balance
              </h1>
              <p className="amount">
                  $921.48
              </p>
          </div>

          <div className="logo"></div>
      </header>
  )
}

export default Header