import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MoviesContainer = props => {
  const movieCards = props.movies.length > 0 ?
    props.movies.map(t => (<div key={t.id} className="w3-quarter"><Link to={`/movies/${t.id}`}>{t.attributes.title}</Link></div>)) :
    null
  return (
    <div className=" w3-row-padding w3-container w3-padding-32 w3-center">
      {movieCards}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    movies: state.userMovies
  }
}

export default connect(mapStateToProps)(MoviesContainer)
