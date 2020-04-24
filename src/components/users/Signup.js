import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from "../../actions/signupForm.js";
import { signup } from "../../actions/currentUser.js";


const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {

  const handleUserProfileChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData, history)
  }

  return (
    <div className="w3-container w3-padding-32 w3-center">
      <h1 className="txt w3-jumbo">Welcome</h1>
      <div className='bold-line'></div>
      <div className='container'>
        <div className='window'>
          <div className='overlay'></div>
          <div className='content'>
            <div className='welcome'>Please Sign Up</div>
            <div className='input-fields'>
              <form onSubmit={handleSubmit}>
                <input className='input-line full-width w3-xlarge' placeholder="Your Name" value={signupFormData.name} name="name" type="text" onChange={handleUserProfileChange} />
                <input className='input-line full-width w3-xlarge' placeholder="youremail@email.com" value={signupFormData.email} name="email" type="email" onChange={handleUserProfileChange} />
                <input className='input-line full-width w3-xlarge' placeholder="password" value={signupFormData.password} name="password" type="password" onChange={handleUserProfileChange} />
                <input className='input-button' type="submit" value="Sign Up"/>
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
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)
