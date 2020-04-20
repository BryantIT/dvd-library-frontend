import React from 'react';
import { connect } from 'react-redux';
import { updateMovieForm } from '../actions/movieForm';

const MovieForm = ({ userId, formData, updateMovieForm, createUserMovie,
  movie, handleSubmit, editMode }) => {

  const {title, year, description} = formData

  const handleChange = event => {
    const { name, value } = event.target
    updateMovieForm(name, value)
  }

  return (
    <form onSubmit={event => {
        event.preventDefault()
        handleSubmit(formData)
      }}>
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
      <input type="submit" value={editMode ? "Update Movie" : "Create Movie"} />
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

export default connect(mapStateToProps,{ updateMovieForm })(MovieForm);
