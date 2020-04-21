const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_BOOKS":
      return action.books
    case "ADD_USER_BOOK":
      return state.concat(action.userBook)
    case "UPDATE_USER_BOOK":
      return state.map(book => book.id === action.book.id ? action.book : book)
    case "DELETE_USER_BOOK":
    return state.filter(book => book.id === action.bookId ? false : true)
    case "CLEAR_USER_BOOKS":
      return initialState
    default:
      return state
  }
}
