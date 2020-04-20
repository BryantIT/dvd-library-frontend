import React from 'react';
import { connect } from 'react-redux';
import { updateNewBookForm } from '../actions/newBookForm';
import { createUserBook } from '../actions/userBooks';

const NewBookForm = ({ userId, formData, history, updateNewBookForm, createUserBook }) => {

  const {title, author, description} = formData

  const handleChange = event => {
    const { name, value } = event.target
    updateNewBookForm(name, value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    createUserBook(formData, history)
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
        placeholder="Description" name="description" value={description}
        onChange={handleChange} />
      <input type="hidden" name="userId" value={userId} />
      <input type="submit" value="Submit" />
    </form>
  )
}

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ""
  return {
    formData: state.newBookForm,
    userId
  }
}

export default connect(mapStateToProps,{ updateNewBookForm, createUserBook })(NewBookForm);
