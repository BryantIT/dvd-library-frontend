import React from 'react';
import { updateBookForm } from '../actions/bookForm';
import { connect } from 'react-redux';

const BookForm = ({ userId, formData, updateBookForm,
  book, handleSubmit, editMode }) => {

  const {title, author, description} = formData

  const handleChange = event => {
    const { name, value } = event.target
    updateBookForm(name, value)
  }



  return (
    <div className="w3-container w3-padding-32 w3-center">
      <div className='bold-line'></div>
      <div className='container'>
        <div className='window'>
          <div className='overlay'></div>
          <div className='content'>
            <div className='welcome'>{editMode ? "Update Book" : "Add a New Book"}</div>
            <div className='input-fields'>
              <form onSubmit={event => {
                  event.preventDefault()
                  handleSubmit(formData)
                }}>
                <input className='input-line full-width w3-xlarge'
                  placeholder="Title" name="title" type="text" value={title}
                  onChange={handleChange} />
                <input className='input-line full-width w3-xlarge'
                  placeholder="Author" name="author" type="text" value={author}
                  onChange={handleChange} />
                <textarea className='input-line full-width w3-xlarge'
                  placeholder="Description" name="description" value={description}
                  onChange={handleChange} />
                <input type="hidden" name="userId" value={userId} />
                <input className='input-button' type="submit" value={editMode ? "Update Book" : "Create Book"} />
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
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
