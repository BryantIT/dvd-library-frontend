import React from 'react';
import { connect } from 'react-redux'

const MoviesContainer = () => {
  return (
    <div>
      <h1>Welcome to your movies</h1>
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(MoviesContainer)
