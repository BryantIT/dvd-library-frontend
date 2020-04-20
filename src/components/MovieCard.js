import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  return (
    movie ?
      <div>
        <h3>{movie.attributes.title}</h3>
        <p>{movie.attributes.year}</p>
        <p>{movie.attributes.description}</p>
        <Link to={`/movies/${movie.id}/edit`}>Edit Movie</Link>
      </div> : null

  )
}

export default MovieCard
