import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h2>Homepage</h2>
      <Link to="/signup">Signup</Link> or <Link to="/login">Login</Link>
    </div>
  )
}

export default Home
