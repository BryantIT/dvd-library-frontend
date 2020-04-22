import React, { Component } from 'react';
import MovieForm from './MovieForm';
import { connect } from 'react-redux';
import { updateUserMovie, deleteUserMovie } from '../actions/userMovies';
import { setMovieDataForEdit, resetMovieForm } from '../actions/movieForm';

class EditMovieFormWrapper extends Component {

  componentDidMount() {
    this.props.movie && this.props.setMovieDataForEdit(this.props.movie)
  }

  componentDidUpdate(prevProps) {
    this.props.movie &&
    !prevProps.movie &&
    this.props.setMovieDataForEdit(this.props.movie)
  }

  componentWillUnmount() {
    this.props.resetMovieForm()
  }

    handleSubmit = (formData) => {
      const { updateUserMovie, movie, history } = this.props
    updateUserMovie({
      ...formData,
      movieId: movie.id
    }, history)
  }
  render() {
    const { history, deleteUserMovie, movie } = this.props
    const movieId = movie ? movie.id : null
    return (
      <div className="w3-container w3-center">
        <MovieForm editMode handleSubmit={this.handleSubmit} />
        <button className="input-button" onClick={() => deleteUserMovie(movieId, history)}>Delete this Moviek</button>
      </div>
    )
  }
}

export default connect(null, { updateUserMovie, setMovieDataForEdit, resetMovieForm, deleteUserMovie })(EditMovieFormWrapper);
