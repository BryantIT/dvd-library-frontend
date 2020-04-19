export default (state = [], action) => {
  switch (action.type) {
    case "SET_USER_BOOKS":
      return action.books
    case "CLEAR_USER_BOOKS":
      return []
    default:
      return state
  }
}
