import React from 'react';
import { connect } from 'react-redux';
import Logout from './Logout';
import { NavLink } from 'react-router-dom';

const Nav = ({ currentUser }) => {
  return (
    currentUser ?
    <div className="page">
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__group">
            <NavLink className="menu__link" to="/">Home</NavLink>
          </li>
          <li className="menu__group">
            <NavLink className="menu__link" to="/books">My Books</NavLink>
          </li>
          <li className="menu__group">
            <NavLink className="menu__link" to="/movies">My Movies</NavLink>
          </li>
          <li className="menu__group">
            <NavLink className="menu__link" to="/books/new">New Book</NavLink>
          </li>
          <li className="menu__group">
            <NavLink className="menu__link" to="/movies/new">New Movie</NavLink>
          </li>

          <Logout />
        </ul>
      </nav>

    </div> :
    <div className="page">
      <div className="menu">
        <h2 className="menu__link w3-center">Personal Media Library</h2>
      </div>
    </div>

  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Nav)
