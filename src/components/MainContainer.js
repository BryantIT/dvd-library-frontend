import React from 'react';
import { connect } from 'react-redux';

const MainContainer = ({ currentUser }) => {
  return (
    currentUser ?
    <div className="w3-container w3-padding-32 w3-center">
      <h1>Welcome to your library {currentUser.attributes.name}</h1>
      <div className="w3-padding-32">
        <h2>You currently have</h2>
        <h2>{currentUser.relationships.movies.data.length} Movies
          and {currentUser.relationships.books.data.length} Books</h2>

      </div>
    </div> : ""
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(MainContainer)
