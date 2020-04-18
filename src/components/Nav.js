import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Logout from './Logout';

const Nav = ({ currentUser }) => {
  return (
    <div>
      { currentUser ? <h1>Welcome {currentUser.attributes.name}</h1> : "" }
      { currentUser ? <Logout /> : <Login /> }
      { currentUser ? "Movies" : "" }
      { currentUser ? "Books" : "" }
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Nav)
