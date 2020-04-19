const initialState = {
  title: "",
  year: "",
  description: ""
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_MOVIE_FORM":
      return action.formData
    case "CLEAR_NEW_MOVIE_FORM":
      return initialState
    default:
    return state
  }
}
