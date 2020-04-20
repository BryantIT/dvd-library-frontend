import React from 'react';
import BookForm from './BookForm';
import { connect } from 'react-redux';
import { createUserBook } from '../actions/userBooks';

const NewBookFormWrapper = ({ history, createUserBook }) => {

  const handleSubmit = (formData) => {
    createUserBook(formData, history)
  }
return <BookForm history={history} handleSubmit={handleSubmit} />
}

export default connect(null, { createUserBook })(NewBookFormWrapper);
