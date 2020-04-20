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
