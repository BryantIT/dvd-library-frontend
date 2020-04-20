import React from 'react';
import { connect } from 'react-redux';
import { updateMovieForm } from '../actions/movieForm';
import { createUserMovie } from '../actions/userMovies';

const MovieForm = ({ userId, formData, history, updateMovieForm, createUserMovie }) => {

  const {title, year, description} = formData

  const handleChange = event => {
    const { name, value } = event.target
    updateMovieForm(name, value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    createUserMovie(formData, history)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title" name="title" type="text" value={title}
        onChange={handleChange} />
      <input
        placeholder="Release Year" name="year" type="text" value={year}
        onChange={handleChange} />
      <textarea
        placeholder="Description" name ="description" value={description}
        onChange={handleChange} />
      <input type="hidden" name="userId" value={userId} />
      <input type="submit" value="Submit" />
    </form>
  )
}

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ""
  return {
    formData: state.movieForm,
    userId
  }
}

export default connect(mapStateToProps,{ updateMovieForm, createUserMovie })(MovieForm);
