import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import config from '../../../config';
import '../Singup/Signup.css'

function signIn() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (validateEmail(email) === false) {
    return
  }

  const auth = getAuth(config);

  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    

    window.location.href = `/`
  })
    .catch((error) => {

      const errorMessage = error.message;
      document.getElementById('result').innerText = errorMessage
    })

}

function validateEmail(email) {
  const reg = /\S+@\S+\.\S+/;
  if (reg.test(email) === false) {
    document.getElementById('email-error').innerText = 'Enter valid email'
    return false
  }
  else {
    document.getElementById('email-error').innerText = ''
    return true
  }
}

class Login extends Component {
  render() {
    return (
      <div className='User__verification'>
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-12 col-lg-9 col-xl-7">
                <div className="card shadow-2-strong card-registration" style={{ borderRadius: 15 + 'px' }}>
                  <div className="card-body p-4 p-md-5">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Log In</h3>
                    <div>

                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">

                          <div className="form-outline">
                            <label className="form-label" htmlFor="emailAddress">Email</label>
                            <input type="email" id="email" className="form-control form-control-lg" />
                            <span className='error' id='email-error'></span>
                          </div>


                        </div>

                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <label className="form-label" htmlFor="password">Password</label>
                            <input type="password" id="password" className="form-control form-control-lg" />
                            <span className='error' id='password-error'></span>
                          </div>
                        </div>

                      </div>

                      <span>By login you're agree to our <Link to='/privacy'>Privacy</Link> and <Link to='/terms'>Terms</Link></span>
                      <div className="mt-4 pt-2 d-flex justify-content-between">
                        <input className="btn btn-primary btn-lg" type="submit" value="Submit" onClick={signIn} />

                        <Link className='mt-3' to='/forgetPassword'>Forget Password?</Link>
                      </div>
                      <span id='result' className='error'></span>

                    </div>
                    <div className='option__login mt-5'>
                      <span>Don't have an account? <Link to='/Oauth/Signup'>Craete an Account</Link></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Login