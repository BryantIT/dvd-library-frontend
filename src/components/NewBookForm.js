import React from 'react';
import { connect } from 'react-redux';
import { updateNewBookForm } from '../actions/newBookForm';

const NewBookForm = ({ title, author, description, history, updateNewBookForm }) => {

  const handleChange = event => {
    const { name, value } = event.target
    updateNewBookForm(name, value)
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
        placeholder="Author" name="author" type="text" value={author}
        onChange={handleChange} />
      <textarea
        placeholder="Description" name ="description" value={description}
        onChange={handleChange} />
      <input type="submit" value="Submit" />
    </form>
  )
}

const mapStateToProps = state => {
  const { title, author, description } = state.newBookForm
  return {
    title,
    author,
    description
  }
}

export default connect(mapStateToProps,{ updateNewBookForm })(NewBookForm);
