import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="w3-container w3-padding-32 w3-center">
      <div className="w3-padding-32">
        <h2 className="txt">Welcome to your personal media library</h2>
        <Link className='input-button' to="/signup">Signup</Link>|
        <Link className='input-button' to="/login">Login</Link>
      </div>
    </div>
  )
}

export default Home
