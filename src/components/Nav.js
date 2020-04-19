import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Logout from './Logout';

const Nav = ({ currentUser }) => {
  return (
    currentUser ?
    <div>
      <h1>Welcome {currentUser.attributes.name}</h1>
      <Logout />
      <p>Movies</p>
      <p>Books</p>
    </div> :
    <div>
      <button>Login</button>
      <button>Signup</button>
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Nav)
