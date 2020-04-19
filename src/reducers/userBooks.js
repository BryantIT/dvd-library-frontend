export default (state = [], action) => {
  switch (action.type) {
    case "SET_USER_BOOKS":
      return action.books
    default:
      return state
  }
}
