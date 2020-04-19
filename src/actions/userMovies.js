export const setUserMovies = movies => {
  return {
    type: "SET_USER_MOVIES",
    movies
  }
}

export const clearUserMovies = () => {
  return {
    type: "CLEAR_USER_MOVIES"
  }
}

export const getUserMovies = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/dvds", {
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
        dispatch(setUserMovies(response.data))
      }
    })
    .catch(console.log)
  }
}
