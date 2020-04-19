export const updateNewMovieForm = (name, value) => {
  return {
    type: "UPDATE_NEW_MOVIE_FORM",
    formData: { name, value }
  }
}
