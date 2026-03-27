import React from 'react'
import Logo from '../assets/logo.svg?raw'
import Map from '../assets/world-map.svg?raw'

export default function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <div className="logo-wrap" dangerouslySetInnerHTML={{ __html: Logo }} />
        <div className="brand-text">
          <h1>Globake</h1>
          <small>Cookies with a passport</small>
        </div>
      </div>
      <div className="map-deco" dangerouslySetInnerHTML={{ __html: Map }} />
    </header>
  )
}
