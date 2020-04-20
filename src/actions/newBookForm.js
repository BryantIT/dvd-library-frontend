export const updateNewBookForm = (name, value) => {
  const formData = { name, value }
  return {
    type: "UPDATE_NEW_BOOK_FORM",
    formData
  }
}
