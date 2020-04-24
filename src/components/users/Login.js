import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../../actions/loginForm';
import { login } from '../../actions/currentUser';

const Login = ({ loginForm, updateLoginForm, login, history }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginForm,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }


  const handleSubmit = event => {
    event.preventDefault()
    login(loginForm, history)
  }

  return (
    <div className="w3-container w3-padding-32 w3-center">
      <h1 className="txt w3-jumbo">Welcome Back</h1>
      <div className='bold-line'></div>
      <div className='container'>
        <div className='window'>
          <div className='overlay'></div>
          <div className='content'>
            <div className='welcome'>Please Log In</div>
            <div className='input-fields'>
              <form onSubmit={handleSubmit}>
                <input className='input-line full-width w3-xlarge' placeholder="email"
                  name="email" type="email" value={loginForm.email} onChange={handleInputChange} />
                <input className='input-line full-width w3-xlarge' placeholder="password"
                  name="password" type="password" value={loginForm.password} onChange={handleInputChange} />
                <input className='input-button' type="submit" value="LOGIN" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    loginForm: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)
