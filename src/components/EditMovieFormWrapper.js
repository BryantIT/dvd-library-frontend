import React, { Component } from 'react';
import MovieForm from './MovieForm';
import { connect } from 'react-redux';
import { updateUserMovie } from '../actions/userMovies';
import { setMovieDataForEdit } from '../actions/movieForm';

class EditMovieFormWrapper extends Component {

  componentDidMount() {
    this.props.book && this.props.setMovieDataForEdit(this.props.movie)
  }

    handleSubmit = (formData) => {
      const { updateUserMovie, movie, history } = this.props
    updateUserMovie({
      ...formData,
      movieId: movie.id
    }, history)
  }
render() {
  const { history, handleSubmit } = this.props
  return <MovieForm editMode history={history} handleSubmit={handleSubmit} />
}
}

export default connect(null, { updateUserMovie, setMovieDataForEdit })(EditMovieFormWrapper);
