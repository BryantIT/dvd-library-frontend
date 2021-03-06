const initialState = {
  title: "",
  author: "",
  description: "",
  imageurl: ""
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_BOOK_FORM":
      const returnValue = {
        ...state,
        [action.formData.name]: action.formData.value
      }
      return returnValue
    case "RESET_NEW_BOOK_FORM":
      return initialState
    case "SET_BOOK_DATA_FOR_EDIT":
      return action.bookFormData
    default:
    return state
  }
}
