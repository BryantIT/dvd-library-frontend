import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    movie ?
      <div>
        <h3>{movie.attributes.title}</h3>
        <p>{movie.attributes.year}</p>
        <p>{movie.attributes.description}</p>
      </div> :
      <p>This the the Movie card with no movie!</p>
  )
}

export default MovieCard
