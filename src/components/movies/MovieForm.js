import React from 'react';
import { updateMovieForm } from '../../actions/movieForm';
import { connect } from 'react-redux';

const MovieForm = ({ userId, formData, updateMovieForm,
  movie, handleSubmit, editMode }) => {

  const {title, year, description} = formData

  const handleChange = event => {
    const { name, value } = event.target
    updateMovieForm(name, value)
  }

  return (
    <div className="w3-container w3-padding-32 w3-center">
      <div className='bold-line'></div>
      <div className='container'>
        <div className='window'>
          <div className='overlay'></div>
          <div className='content'>
            <div className='welcome'>Add A New Movie</div>
            <div className='input-fields'>
              <form onSubmit={event => {
                  event.preventDefault()
                  handleSubmit(formData)
                }}>
                <input className='input-line full-width w3-xlarge'
                  placeholder="Title" name="title" type="text" value={title}
                  onChange={handleChange} />
                <input className='input-line full-width w3-xlarge'
                  placeholder="Release Year" name="year" type="text" value={year}
                  onChange={handleChange} />
                <textarea className='input-line full-width w3-xlarge'
                  placeholder="Description" name ="description" value={description}
                  onChange={handleChange} />
                <input type="hidden" name="userId" value={userId} />
                <input className='input-button' type="submit" value={editMode ? "Update Movie" : "Create Movie"} />
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
    formData: state.movieForm,
    userId
  }
}

export default connect(mapStateToProps,{ updateMovieForm })(MovieForm);
