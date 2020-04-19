export const updateSignupForm = (formData)  => {
  return {
    type: "UPDATE_SIGNUP_FORM",
    formData
  }
}

export const clearSignupForm = ()  => {
  return {
    type: "CLEAR_SIGNUP_FORM"
  }
}
