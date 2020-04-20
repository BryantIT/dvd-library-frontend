const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_BOOKS":
      return action.books
    case "ADD_USER_BOOK":
      return state.concat(action.book)
    case "CLEAR_USER_BOOKS":
      return initialState
    default:
      return state
  }
}
