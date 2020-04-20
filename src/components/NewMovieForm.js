import React from 'react';
import { connect } from 'react-redux';
import { updateNewMovieForm } from '../actions/newMovieForm';
import { createUserMovie } from '../actions/userMovies';

const NewBookForm = ({ userId, formData, history, updateNewMovieForm, createUserMovie }) => {
  const handleChange = event => {
    const { name, value } = event.target
    updateNewMovieForm(name, value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    createUserMovie(formData, history)
  }

  const {title, year, description} = formData
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
    formData: state.newMovieForm,
    userId
  }
}

export default connect(mapStateToProps,{ updateNewMovieForm, createUserMovie })(NewBookForm);
