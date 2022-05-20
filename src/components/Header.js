import React from 'react'

import logo from "../images/logo.png"

export default function() {
  return (
    <header className="header">
        <div className="logo">
            <img src={logo} alt='logo' className="img-logo"/>
            <h3 className="app-name">Meme Generator</h3>
        </div>
    </header>
  )
}
