import React from 'react';
import MovieForm from './MovieForm';
import { connect } from 'react-redux';
import { createUserMovie } from '../actions/userMovies';

const NewMovieFormWrapper = ({ history, createUserMovie }) => {

  const handleSubmit = (formData) => {
    createUserMovie(formData, history)
  }
return <MovieForm history={history} handleSubmit={handleSubmit} />
}

export default connect(null, { createUserMovie })(NewMovieFormWrapper);
