import React from 'react';
import { connect } from 'react-redux';

const MainContainer = ({ currentUser }) => {
  return (
    currentUser ?
    <div>
      <h1>Welcome to your library</h1>
      <h2>You have {currentUser.relationships.movies.data.length} movies currently in your library</h2>
      <h2>You have {currentUser.relationships.books.data.length} books currently in your library</h2>
    </div> : ""
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(MainContainer)
