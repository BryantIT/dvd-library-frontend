export default (state = [], action) => {
  switch (action.type) {
    case "SET_USER_MOVIES":
      return action.movies
    case "ADD_USER_BOOK":
      return state.movies.concat(action.movies)
    case "CLEAR_USER_BOOKS":
      return []
    default:
      return state
  }
}
