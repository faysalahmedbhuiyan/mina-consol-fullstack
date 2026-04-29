import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AdminHeader () {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <header style={headerStyle}>
      <div>
        <h2 style={{ cursor: 'pointer' }} onClick={() => navigate('/admin')}>
          Admin Panel
        </h2>
      </div>
      <nav>
        <Link to='/admin/course' style={linkStyle}>
          Courses
        </Link>
        <Link to='/admin/product' style={linkStyle}>
          Products
        </Link>
        <button onClick={handleLogout} style={buttonStyle}>
          Logout
        </button>
      </nav>
    </header>
  )
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  background: '#1f2937',
  color: 'white'
}

const linkStyle = {
  marginRight: '15px',
  textDecoration: 'none',
  color: 'white',
  fontWeight: 'bold'
}

const buttonStyle = {
  padding: '5px 10px',
  background: '#ef4444',
  color: 'white',
  border: 'none',
  cursor: 'pointer'
}
