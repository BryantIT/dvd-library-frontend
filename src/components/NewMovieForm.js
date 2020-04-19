import React from 'react';
import { connect } from 'react-redux';
import { updateNewMovieForm } from '../actions/newMovieForm';

const NewBookForm = ({ title, year, description, history }) => {
  const handleChange = event => {
    const { name, value } = event.target
    updateNewMovieForm(name, value)
  }

  const handleSubmit = event => {
    event.preventDefault()
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
      <input type="submit" value="Submit" />
    </form>
  )
}

const mapStateToProps = state => {
  const { title, year, description } = state.newMovieForm
  return {
    title,
    year,
    description
  }
}

export default connect(mapStateToProps,{ updateNewMovieForm })(NewBookForm);
