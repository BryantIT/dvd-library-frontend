import React from 'react';
import { connect } from 'react-redux';
import { updateBookForm } from '../actions/bookForm';

const BookForm = ({ userId, formData, updateBookForm, createUserBook,
  book, handleSubmit, editMode }) => {

  const {title, author, description} = formData

  const handleChange = event => {
    const { name, value } = event.target
    updateBookForm(name, value)
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
        placeholder="Author" name="author" type="text" value={author}
        onChange={handleChange} />
      <textarea
        placeholder="Description" name="description" value={description}
        onChange={handleChange} />
      <input type="hidden" name="userId" value={userId} />
      <input type="submit" value={editMode ? "Update Book" : "Create Book"} />
    </form>
  )
}

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ""
  return {
    formData: state.bookForm,
    userId
  }
}

export default connect(mapStateToProps,{ updateBookForm })(BookForm);
