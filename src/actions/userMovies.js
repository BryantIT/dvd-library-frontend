import { resetMovieForm } from './movieForm';

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

export const addUserMovie = userMovie => {
  return {
    type: "ADD_USER_MOVIE",
    userMovie
  }
}

export const updateUserMovieSuccess = userMovie => {
  return {
    type: "UPDATE_USER_MOVIE",
    userMovie
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
        dispatch(setUserMovies(response.data))
      }
    })
    .catch(console.log)
  }
}

export const createUserMovie = (movieData, history) => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/movies", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(movieData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(addUserMovie(resp.data))
        dispatch(resetMovieForm())
        history.push(`/movies/${resp.data.id}`)
      }
    })
    .catch(console.log)
  }
}

export const updateUserMovie = (movieData, history) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/movies/${movieData.movieId}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(movieData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(updateUserMovieSuccess(resp.data))
        dispatch(resetMovieForm())
        history.push(`/movies/${resp.data.id}`)
      }
    })
    .catch(console.log)
  }
}
