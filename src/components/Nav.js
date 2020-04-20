import React from 'react';
import { connect } from 'react-redux';
import Logout from './Logout';
import { NavLink } from 'react-router-dom';

const Nav = ({ currentUser }) => {
  return (
    currentUser ?
    <div className="NavBar">
      <h1>Welcome {currentUser.attributes.name}</h1>
      <NavLink to="/books">My Books</NavLink>
      <NavLink to="/movies">My Movies</NavLink>
      <NavLink to="/books/new">New Book</NavLink>
      <NavLink to="/movies/new">New Movie</NavLink>
      <Logout />
    </div> : ""

  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Nav)
