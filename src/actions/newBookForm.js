export const updateNewBookForm = (name, value) => {
  return {
    type: "UPDATE_NEW_BOOK_FORM",
    formData: { name, value }
  }
}
