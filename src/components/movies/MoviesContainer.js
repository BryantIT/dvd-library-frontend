import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MoviesContainer = props => {
  const movieCards = props.movies.length > 0 ?
    props.movies.sort((a, b) => a.attributes.title.localeCompare(b.attributes.title)).map(t => (
      <div key={t.id} className="w3-quarter w3-margin-bottom">
        <div className="box gallery">
          <div className="card">
            <div className="background">
              <div className="info">
                <Link className="overlay" to={`/movies/${t.id}`}></Link>
                <h2>{t.attributes.title}</h2>
                <p>{t.attributes.year}</p>
                <div className="foot">
                  <i className="line"></i>
                  <p>{t.attributes.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>)) : null
  return (
    <div className="w3-row-padding w3-container w3-padding-32 w3-center">
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
