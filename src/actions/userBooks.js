import { resetBookForm } from './bookForm';

export const setUserBooks = books => {
  return {
    type: "SET_USER_BOOKS",
    books
  }
}

export const clearUserBooks = () => {
  return {
    type: "CLEAR_USER_BOOKS"
  }
}

export const addUserBook = userBook => {
  return {
    type: "ADD_USER_BOOK",
    userBook
  }
}

export const updateUserBookSuccess = userBook => {
  return {
    type: "UPDATE_USER_BOOK",
    userBook
  }
}

export const deleteUserBookSuccess = bookId => {
  return {
    type: "DELETE_USER_BOOK",
    bookId
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
        dispatch(setUserBooks(response.data))
      }
    })
    .catch(console.log)
  }
}

export const createUserBook = (bookData, history) => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/books", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(addUserBook(resp.data))
        dispatch(resetBookForm())
        history.push(`/books/${resp.data.id}`)
      }
    })
    .catch(console.log)
  }
}

export const updateUserBook = (bookData, history) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/books/${bookData.bookId}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(updateUserBookSuccess(resp.data))
        history.push(`/books/${resp.data.id}`)
      }
    })
    .catch(console.log)
  }
}

export const deleteUserBook = (bookId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/books/${bookId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(deleteUserBookSuccess(bookId))
        history.push('/books')
      }
    })
    .catch(console.log)
  }
}
