export const setUserBooks = books => {
  return {
    type: "SET_USER_BOOKS",
    books
  }
}

export const getUserBooks = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/books", {
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
        dispatch(setUserBooks())
      }
    })
    .catch(console.log)
  }
}
