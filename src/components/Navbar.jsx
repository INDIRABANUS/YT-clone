import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    setQuery(e.target.value)
    onSearch && onSearch(e.target.value)
  }

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-title">
        <h2>YouTube Clone</h2>
      </Link>

      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleSearch}
      />
    </nav>
  )
}
