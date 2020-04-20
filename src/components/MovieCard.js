import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    movie ?
      <div>
        <h3>{movie.attributes.title}</h3>
        <p>{movie.attributes.year}</p>
        <p>{movie.attributes.description}</p>
      </div> : null

  )
}

export default MovieCard
