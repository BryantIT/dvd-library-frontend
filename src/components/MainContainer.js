import React from 'react';
import { connect } from 'react-redux';

const MainContainer = ({ currentUser }) => {
  return (
    <div>
      <h1>Welcome to your library</h1>
      { currentUser ? <h2>You have {currentUser.relationships.dvds.data.length} movies currently in your library</h2> : '' }
      <button>View Movies</button>
      { currentUser ? <h2>You have {currentUser.relationships.books.data.length} books currently in your library</h2> : '' }
      <button>View Books</button>
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(MainContainer)
