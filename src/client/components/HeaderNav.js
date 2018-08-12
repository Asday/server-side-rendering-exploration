import React from 'react'

import { Link } from 'react-router-dom'

export default class HeaderNav extends React.Component {
  render = () => (
    <header>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/nowhere">404</Link>
    </header>
  )
}
