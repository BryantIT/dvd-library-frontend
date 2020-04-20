const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_MOVIES":
      return action.movies
    case "ADD_USER_MOVIES":
      return state.concat(action.movie)
    case "UPDATE_USER_MOVIES":
      return state.map(movie => movie.id === action.movie.id ? action.movie : movie)
    case "DELETE_TRIP":
    return state.filter(movie => movie.id === action.movieId ? false : true)
    case "CLEAR_USER_MOVIES":
      return initialState
    default:
      return state
  }
}
