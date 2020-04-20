export const updateNewMovieForm = (name, value) => {
  const formData = { name, value }
  return {
    type: "UPDATE_NEW_MOVIE_FORM",
    formData
  }
}
