import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {

  return (
    movie ?
      <div className="w3-row-padding w3-container w3-padding-32 w3-center">
          <div className="box gallery">
            <div className="card">
              <div className="background">
                <div className="info">
                  <h3 className="bg">{movie.attributes.title}</h3>
                  <p className="bg">{movie.attributes.year}</p>
                  <div className="foot">
                    <i className="line"></i>
                      <p className="bg">{movie.attributes.description}</p>
                  </div>
                </div>
                <img src={movie.attributes.imageurl} alt={movie.attributes.title} className="cover-sizing"/>
              </div>
            </div>
          </div>
          <Link className="input-button" to={`/movies/${movie.id}/edit`}>Edit Movie</Link>
      </div> : null
  )
}

export default MovieCard
