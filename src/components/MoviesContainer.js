import React from 'react';
import { connect } from 'react-redux';

const MoviesContainer = props => {
  const movieCards = props.movies.length > 0 ?
    props.movies.map(t => (<p key={t.id}>{t.attributes.title}</p>)) :
    null
  return movieCards
}

const mapStateToProps = state => {
  return {
    movies: state.userMovies
  }
}

export default connect(mapStateToProps)(MoviesContainer)
