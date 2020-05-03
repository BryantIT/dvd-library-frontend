const initialState = {
  title: "",
  year: "",
  description: "",
  imageurl: ""
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_MOVIE_FORM":
      const returnValue = {
        ...state,
        [action.formData.name]: action.formData.value
      }
      return returnValue
    case "RESET_NEW_MOVIE_FORM":
      return initialState
    case "SET_MOVIE_DATA_FOR_EDIT":
      return action.movieFormData
    default:
    return state
  }
}
