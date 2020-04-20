export default (state = [], action) => {
  switch (action.type) {
    case "SET_USER_MOVIES":
      return action.movies
    case "ADD_USER_MOVIES":
      return state.concat(action.movie)
    case "CLEAR_USER_MOVIES":
      return []
    default:
      return state
  }
}
