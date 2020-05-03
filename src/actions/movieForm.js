export const updateMovieForm = (name, value) => {
  const formData = { name, value }
  return {
    type: "UPDATE_NEW_MOVIE_FORM",
    formData
  }
}

export const resetMovieForm = () => {
  return {
    type: "RESET_NEW_MOVIE_FORM"
  }
}

export const setMovieDataForEdit = movie => {
  const movieFormData ={
    title: movie.attributes.title,
    year: movie.attributes.author,
    description: movie.attributes.description,
    imageurl: movie.attributes.imageurl
  }
  return {
    type: "SET_MOVIE_DATA_FOR_EDIT",
    movieFormData
  }
}
