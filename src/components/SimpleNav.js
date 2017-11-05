import React from 'react'
import { Link } from 'react-router-dom'

const SimpleNav = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/actor">Actor</Link>
    <Link to="/movie">Movie</Link>
  </nav>
)

export default SimpleNav
