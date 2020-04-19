export const setUserMovies = movies => {
  return {
    type: "SET_USER_MOVIES",
    movies
  }
}

export const getUserMovies = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/movies", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(r => r.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(setUserMovies())
      }
    })
    .catch(console.log)
  }
}
