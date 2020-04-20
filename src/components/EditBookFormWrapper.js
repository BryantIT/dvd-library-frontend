import React, { Component } from 'react';
import BookForm from './BookForm';
import { connect } from 'react-redux';
import { updateUserBook } from '../actions/userBooks';
import { setBookDataForEdit } from '../actions/bookForm';

class EditBookFormWrapper extends Component {

  componentDidMount() {
    this.props.book && this.props.setBookDataForEdit(this.props.book)
  }

    handleSubmit = (formData) => {
      const { updateUserBook, book, history } = this.props
    updateUserBook({
      ...formData,
      bookId: book.id
    }, history)
  }
render() {
  const { history, handleSubmit } = this.props
  return <BookForm editMode handleSubmit={this.handleSubmit} />
}
}

export default connect(null, { updateUserBook, setBookDataForEdit })(EditBookFormWrapper);
