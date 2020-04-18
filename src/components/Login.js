import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm';
import { login } from '../actions/currentUser';

const Login = ({ loginForm, updateLoginForm, login }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginForm,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = e => {
    e.preventDefault()
    login(loginForm)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="you@email.com" name="email" type="email" value={loginForm.email} onChange={handleInputChange} />
      <input placeholder="password" name="password" type="password" value={loginForm.password} onChange={handleInputChange} />
      <input type="submit" value="login" />
    </form>
  )
}

const mapStateToProps = state => {
  return {
    loginForm: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)
