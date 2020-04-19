const initialState = {
  title: "",
  author: "",
  description: ""
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_BOOK_FORM":
      return action.formData
    case "CLEAR_NEW_BOOK_FORM":
      return initialState
    default:
    return state
  }
}
