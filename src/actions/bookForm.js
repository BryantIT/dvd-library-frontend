export const updateBookForm = (name, value) => {
  const formData = { name, value }
  return {
    type: "UPDATE_NEW_BOOK_FORM",
    formData
  }
}

export const resetBookForm = () => {
  return {
    type: "RESET_NEW_BOOK_FORM"
  }
}

export const setBookDataForEdit = book => {
  const bookFormData = {
    title: book.attributes.title,
    author: book.attributes.author,
    description: book.attributes.description,
    imageurl: book.attributes.imageurl
  }
  return {
    type: "SET_BOOK_DATA_FOR_EDIT",
    bookFormData
  }
}
