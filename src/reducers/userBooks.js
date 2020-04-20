export default (state = [], action) => {
  switch (action.type) {
    case "SET_USER_BOOKS":
      return action.books
    case "ADD_USER_BOOK":
      return state.books.concat(action.books)
    case "CLEAR_USER_BOOKS":
      return []
    default:
      return state
  }
}
