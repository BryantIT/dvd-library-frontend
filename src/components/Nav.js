import React from 'react';
import { connect } from 'react-redux'
import Login from './Login';
import Logout from './Logout';

const Nav = ({ currentUser }) => {
  return (
    <div>
      { currentUser ? <h1>Welcome {currentUser.name}</h1> : "" }
      { currentUser ? <Logout /> : <Login /> }
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Nav)
