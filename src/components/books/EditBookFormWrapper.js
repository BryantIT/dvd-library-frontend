import React, { Component } from 'react';
import BookForm from './BookForm';
import { updateUserBook, deleteUserBook } from '../../actions/userBooks';
import { setBookDataForEdit, resetBookForm } from '../../actions/bookForm';
import { connect } from 'react-redux';

class EditBookFormWrapper extends Component {

  componentDidMount() {
    this.props.book && this.props.setBookDataForEdit(this.props.book)
  }

  componentDidUpdate(prevProps) {
    this.props.book &&
    !prevProps.book &&
    this.props.setBookDataForEdit(this.props.book)
  }

  componentWillUnmount() {
    this.props.resetBookForm()
  }

    handleSubmit = (formData) => {
      const { updateUserBook, book, history } = this.props
    updateUserBook({
      ...formData,
      bookId: book.id
    }, history)
  }
  render() {
    const { history, deleteUserBook, book } = this.props
    const bookId = book ? book.id : null
    return  (
      <div className="w3-container w3-center">
        <BookForm editMode handleSubmit={this.handleSubmit} />
        <button className="input-button" onClick={() => deleteUserBook(bookId, history)}>Delete this Book</button>
      </div>
    )
  }
}

export default connect(null, { updateUserBook, setBookDataForEdit, resetBookForm, deleteUserBook })(EditBookFormWrapper);
